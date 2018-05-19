import React, { Component } from 'react';
import '../styles/App.css';
import {Segment} from 'semantic-ui-react'

class Quote extends Component {
    render () {
        return (
            <Segment basic>
                <p><em>{this.props.quote[0]}</em></p> <p style={{float: "right"}}>-<span>{this.props.quote[1]}</span></p>
            </Segment>
        )
    }
}

export default Quote