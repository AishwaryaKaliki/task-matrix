import React, { Component } from 'react';
import '../styles/App.css';
import {List, Button  } from 'semantic-ui-react'

class TaskListItem extends Component {

    handleDelete = () => {
        this.props.deleteTask(this.props.taskCategoryKey, this.props.taskIndex, )
    }

    handleCheck = () => {
        this.props.setTaskStatus(this.props.taskCategoryKey, this.props.taskIndex, !(this.props.details.completed));
    }

    render () {
        return (
            <List.Item>
                <List.Content floated="right">
                    <Button icon={this.props.details.completed ? "undo": "check"} size="mini" onClick={this.handleCheck}/>
                    <Button icon='delete' size="mini" onClick={this.handleDelete}/>                    
                </List.Content>
                <List.Content floated="left">
                    <List.Header><span className={this.props.details.completed ? "complete": ""}>{this.props.details.title}</span></List.Header>
                </List.Content>
            </List.Item>
        )
    }
}

export default TaskListItem