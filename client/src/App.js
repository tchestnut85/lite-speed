import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './pages/About';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Auth from './utils/auth';
import Chatbot from './components/Chatbot';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Lesson from './pages/Lesson';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import React from 'react';
import Signup from './pages/Signup';

const client = new ApolloClient({

  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path='/courses' component={Courses} />
                  <Route exact path='/courses/:id' component={Lesson} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/" component={Dashboard} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </>
          ) : (
              <>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={Signup} />
              </>
            )}
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;