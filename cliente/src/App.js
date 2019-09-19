import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Cmponents
import Header from './components/Header'
import Users from './components/Users'
import UpdateUser from './components/UpdateUser'
import NewUser from './components/NewUser'
import Task from './components/Tasks'
import UpdateTask from './components/UpdateTask';
import NewTask from './components/NewTask';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError:({networkError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors  )
    console.log('networkError', networkError  )
  }
})

class App extends Component{
  render(){
    return (
      <ApolloProvider client={client} >
        <Router>
          <Fragment>
            <Header></Header>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/user/new" component={NewUser} />
                <Route exact path="/user/edit/:id" component={UpdateUser} />
                <Route exact path="/task" component={Task} />
                <Route exact path="/task/new" component={NewTask} />
                <Route exact path="/task/edit/:id" component={UpdateTask} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
