import React, { Component } from 'react';
import '../styles/App.css';
import {List, Button  } from 'semantic-ui-react'

class TaskListItem extends Component {
    handleDelete = () => {
        this.props.deleteTask(this.props.taskCategoryKey, this.props.taskIndex, )
    }
    render () {
        return (
            <List.Item>
                <List.Content floated="left">
                    <List.Header>{this.props.details}</List.Header>
                </List.Content>
                <Button icon='delete' size="mini" floated="right" onClick={this.handleDelete}/>
                <Button icon='check' size="mini" floated="right" onClick={this.handleCheck}/>
            </List.Item>
        )
    }
}

export default TaskListItem