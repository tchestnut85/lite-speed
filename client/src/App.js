import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
import LessonQuiz from './components/LessonQuiz';
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
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/lessonquiz" component={LessonQuiz} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </>
          ) : (
              <>
                {/* <Switch> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={Signup} />
                {/* </Switch> */}
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