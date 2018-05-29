import React, { Component } from 'react';
import '../styles/App.css';
import {List, Button  } from 'semantic-ui-react'

class TaskList extends Component {
    handleDelete = () => {
        this.props.deleteTaskList(this.props.index)
    }

    render () {
        const {name, pending} = this.props.details
        return (
            <List.Item id={this.props.index} onClick={this.props.setCurrentList}>
                <List.Content floated="right">
                    <Button icon='delete' size="mini" onClick={this.handleDelete}/>
                </List.Content>
                <List.Icon name='list' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{name}</List.Header>
                    <List.Description as='a'>{pending} Tasks Pending</List.Description>
                </List.Content>
                
            </List.Item>
        )
    }
}

export default TaskList