import React, { Component, Fragment } from 'react';
import 'whatwg-fetch'
import '../styles/App.css';
import { Sidebar, Segment, Menu, Image, Header, List, Grid  } from 'semantic-ui-react'
import IdleTimer from 'react-idle-timer';
import TaskList from './TaskList';
import TaskCategory from './TaskCategory';
import Quote from './Quote';
import {getQuoteOfTheDay} from '../helper'

class App extends Component {
  state = {
    id: 0,
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
    .then(json => json.length > 0 ? this.setState({id: json[0].id, avatar: "/assets/" + user + ".png", displayName: json[0].name, lists: json[0].data, quote: getQuoteOfTheDay()}) : this.props.history.push(`/notfound`))
    .catch(function(ex) {
      console.log('Parsing Failed...', ex)
    })
  }

  toggleSidebarVisibility = () => this.setState({ toggleSidebar: !this.state.toggleSidebar })

  setCurrentList = (e) => {
    this.setState({currentList: parseInt(e.currentTarget.id,10)})
  }

  addTask = (listIndex, task) => {
    const lists = this.state.lists
    lists[this.state.currentList].tasks[listIndex] =  [task, ...this.state.lists[this.state.currentList].tasks[listIndex]]
    this.setState({ lists })
  }

  deleteTask = (listIndex, taskIndex) => {
    const lists = this.state.lists
    lists[this.state.currentList].tasks[listIndex].splice(taskIndex, 1)
    this.setState({ lists })
  }

  autosave = () => {
    const user = this.props.match.params.username
    fetch("http://localhost:3001/accounts/" + this.state.id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "username": this.state.username,
          "name": this.state.displayName,
          "data": this.state.lists
      })
    }).then(function(response) {
      return response.json()
    }).catch(function(ex) {
      console.log('parsing failed: ', ex)
    });
  }

  render() {
    return (
    <Fragment>
      <IdleTimer ref="saveTimer" timeout={5000} startOnLoad={false} idleAction={this.autosave}>
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
          <Sidebar as={Segment} animation='slide along' visible={this.state.toggleSidebar} icon='labeled' vertical>
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
                    <TaskCategory label="Focus" description="Urgent and Important. Finish these ASAP." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={0} addTask={this.addTask} deleteTask={this.deleteTask}/>
                  </Grid.Column>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Goals" description="Important but not Urgent. Plan them out and complete in a reasonable timeframe." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={1} addTask={this.addTask} deleteTask={this.deleteTask}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} style={{height: "50%", padding: "0.1rem"}}>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Fit In" description="Urgent but not Important. Schedule these into open slots." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={2} addTask={this.addTask} deleteTask={this.deleteTask}/>
                  </Grid.Column>
                  <Grid.Column stretched style={{padding: "0.2rem"}}>
                    <TaskCategory label="Backburner" description="Not Urgent and Not Important. Keep in mind, and delegate whenever possible." tasks={this.state.lists} taskListKey={this.state.currentList} taskCategoryKey={3} addTask={this.addTask} deleteTask={this.deleteTask}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </IdleTimer>
    </Fragment>
    )
  }
}

export default App;
