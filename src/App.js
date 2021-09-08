// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#010224';
      showAlert(": Dark mode has been enabled", "success")
      // document.title = 'TextUtils Dark Mode Enable'
      setInterval(() => {
        document.title = 'TextUtils is amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now'

      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(": Light mode has been enabled", "success")
      // document.title = 'TextUtils Light Mode Enable'
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar title1="TextUtil s" about="About TextUtils"/> */}
        <Navbar title1="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/About">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForms showAlert={showAlert} heading=" Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  )

}

export default App;
