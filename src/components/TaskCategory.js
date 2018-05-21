import React, { Component } from 'react';
import '../styles/App.css';
import { Segment, List, Header, Input, Icon } from 'semantic-ui-react'
import TaskListItem from './TaskListItem.js'

class TaskCategory extends Component {

    addTask = (event) => {
         if (event.key === "Enter") { 
             this.props.addTask(this.props.taskCategoryKey, event.target.value)
             event.target.value = ''
        }
    }

    render () {
        const taskList = (this.props && this.props.tasks && this.props.tasks.length > 0) ? this.props.tasks[this.props.taskListKey]["tasks"][this.props.taskCategoryKey]: []
        return (
            <Segment style={{height: "50%"}}>
                <Header size='large' dividing>
                    {this.props.label}
                    <Header.Subheader>
                        {this.props.description}
                    </Header.Subheader>
                </Header>
                <Input transparent fluid placeholder='Add Task...' onKeyPress={this.addTask}>
                    <Icon name='ellipsis vertical' />
                    <input />
                </Input>
                <List divided relaxed>
                {   
                    taskList.map(function(item, index) {
                        return (<TaskListItem details={item} key={index} />)
                    })
                }
                </List>
            </Segment>
        )
    }
}

export default TaskCategory