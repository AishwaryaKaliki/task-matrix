import React, { Component } from 'react';
import '../styles/App.css';
import {List, Button  } from 'semantic-ui-react'

class TaskListItem extends Component {
    state = {
        completed: true
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.taskCategoryKey, this.props.taskIndex, )
    }

    handleCheck = () => {
        var completed = !(this.state.completed) 
        this.setState({completed});
    }

    render () {
        return (
            <List.Item>
                <List.Content floated="right">
                    <Button icon='delete' size="mini" onClick={this.handleDelete}/>
                    <Button icon='check' size="mini" onClick={this.handleCheck}/>
                </List.Content>
                <List.Content floated="left">
                    <List.Header><span className={this.state.completed ? "complete": ""}>{this.props.details}</span></List.Header>
                </List.Content>
            </List.Item>
        )
    }
}

export default TaskListItem