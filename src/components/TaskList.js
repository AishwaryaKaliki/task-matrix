import React, { Component } from 'react';
import '../styles/App.css';
import {List  } from 'semantic-ui-react'

class TaskList extends Component {
    render () {
        const {name, pending} = this.props.details
        return (
            <List.Item id={this.props.index} onClick={this.props.setCurrentList}>
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