import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 350 }}>
        <Header as='h2' style={{color: '#4183c4'}} textAlign='center'>
          Log into Task Matrix
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Username'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button style={{backgroundColor: '#4183c4', color: "white"}} fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          Are you a new user? <a href='#'>Create an account.</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm