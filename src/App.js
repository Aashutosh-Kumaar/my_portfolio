import React from 'react'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {Route, Redirect, useLocation,Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation();
  return (
    
      <div className="App">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">
              
                <Sidebar />
                
           </div>
              <div className="col-lg-9 app__main-content">
                <Navbar />

                <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>

                <Route path="/Resume">
                  <Resume />
                </Route>

                <Route path="/Projects">
                  <Projects />
                </Route>

                <Route>
                  <Redirect to ="/" />
                </Route>
                </Switch>
                </AnimatePresence>
              </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;
