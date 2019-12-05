import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

/// Import Components Here
import Dock from '../components/Dock'; 
import Notebook from '../components/Notebook'; 
import ControlPanel from '../components/ControlPanel'; 

function App() {
  return (
    <div className="app">
      <Dock />
      
      <Switch>
        <Route 
          path = "/todos/:user" 
          render = { props => {
            return (
              <>
                <Notebook {...props} />
              </>
            )
          }}
        />
        <Route path = "/settings/:user" component={ControlPanel} />
      </Switch>
    </div>
  );
}
