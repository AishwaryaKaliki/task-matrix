import React, { Component } from 'react';
import '../styles/App.css';
import {List  } from 'semantic-ui-react'

class TaskListItem extends Component {
    render () {
        return (
            <List.Item>
                <List.Icon name='ellipsis vertical' verticalAlign='middle' />
                <List.Content>
                <List.Header as='a'>{this.props.details}</List.Header>
                <List.Description as='a'></List.Description>
                </List.Content>
            </List.Item>
        )
    }
}

export default TaskListItem