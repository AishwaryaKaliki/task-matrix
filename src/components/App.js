import React, { Component, Fragment } from 'react';
import 'whatwg-fetch'
import '../styles/App.css';
import { Sidebar, Segment, Menu, Image, Header, List, Grid  } from 'semantic-ui-react'
import TaskList from './TaskList';
import TaskCategory from './TaskCategory';
import Quote from './Quote';
import {getQuoteOfTheDay} from '../helper'

class App extends Component {
  state = {
    displayName: "",
    avatar: "",
    lists: [],
    currentList: 0,
    quote: ["",""],
    toggleSidebar: false
  }

  componentDidMount() {
    const user = this.props.match.params.username
    fetch("http://localhost:3001/accounts?username="+user)
    .then(response => response.json())
    .then(json => json.length > 0 ? this.setState({avatar: "/assets/" + user + ".png", displayName: json[0].name, lists: json[0].data, quote: getQuoteOfTheDay()}) : this.props.history.push(`/notfound`))
    .catch(function(ex) {
      console.log('Parsing Failed...', ex)
    })
  }

  toggleSidebarVisibility = () => this.setState({ toggleSidebar: !this.state.toggleSidebar })

  setCurrentList = (e) => {
    this.setState({currentList: parseInt(e.currentTarget.id,10)})
  }

  render() {
    const { toggleSidebar } = this.state

    return (
    <Fragment>
      <Menu icon size='large' style={{marginBottom: "0"}}>
        <Menu.Item name='sidebar-toggle' onClick={this.toggleSidebarVisibility}>
        <Header as='h4'>
          <Image circular size="tiny" src={this.state.avatar} />
          <Header.Content style={{marginLeft: "0.5rem"}}>
            Hi, {this.state.displayName}!
          </Header.Content>
        </Header>
        </Menu.Item>
      </Menu>
      <Sidebar.Pushable as={Segment} style={{height: "90%", marginTop: "0"}}>
          <Sidebar as={Segment} animation='slide along' visible={toggleSidebar} icon='labeled' vertical>
            <Quote quote={this.state.quote}/>
            <List selection divided relaxed verticalAlign='middle'>
                { 
                  this.state.lists.map((item, index) => (<TaskList key={index} index={index} details={item} setCurrentList={this.setCurrentList} />))
                }
            </List>
          </Sidebar>
          <Sidebar.Pusher style={{height: "100%"}}>
            <Segment basic style={{height: "inherit"}}>
              <Grid style={{height: "inherit"}} padded={false}> 
                <Grid.Row columns={2} style={{height: "50%", padding: "0.1rem"}}>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Focus" description="Urgent and Important. Finish these ASAP." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={0} />
                  </Grid.Column>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Goals" description="Important but not Urgent. Plan them out and complete in a reasonable timeframe." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={1}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} style={{height: "50%", padding: "0.1rem"}}>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Fit In" description="Urgent but not Important. Schedule these into open slots." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={2}/>
                  </Grid.Column>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Backburner" description="Not Urgent and Not Important. Keep in mind, and delegate whenever possible." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={3}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Fragment>
    )
  }
}

export default App;