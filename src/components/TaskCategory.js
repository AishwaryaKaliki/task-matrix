import React, { Component } from 'react';
import '../styles/App.css';
import { Segment, List, Header } from 'semantic-ui-react'
import TaskListItem from './TaskListItem.js'

class TaskCategory extends Component {
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