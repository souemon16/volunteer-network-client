import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import EventTask from './Components/EventTask/EventTask';
import VolunteerList from './Components/VolunteerList/VolunteerList';
import AddEvent from './Components/AddEvent/AddEvent';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const userContext = createContext();
export const eventContext = createContext();
export const taskContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn : false,
    newUser : true,
    userName: '',
    userEmail: '',
    error: '',
    success: false
  });
  const [event, setEvent] = useState([]);
  const [task, setTask] = useState({
    taskId: '',
    volunteerName: '',
    volunteerEmail: '',
    taskName: '',
    taskDate: '',
    taskImage: '' 
  })
  
  return (
    <>
    <userContext.Provider value={[user, setUser]}>
    <eventContext.Provider value={[event, setEvent]}>
    <taskContext.Provider value={[task, setTask]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <PrivateRoute path='/registration'>
          <RegisterVolunteer/>
        </PrivateRoute>

        <PrivateRoute path='/event-task'>
          <EventTask/>
        </PrivateRoute>

        <Route path='/volunteer-list'>
          <VolunteerList/>
        </Route>

        <Route path='/add-event'>
          <AddEvent/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>

      </Switch>
    </Router>
    </taskContext.Provider>
    </eventContext.Provider>
    </userContext.Provider>
    </>
  );
}

export default App;
