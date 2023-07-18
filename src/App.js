import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import Ideas from './MyIdeas';
import IdeaForm from './IdeaForm';
import Idea from './Idea';
// import Button from '@material-ui/core';
import './App.css';



function App() {

  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>

          <Route exact path="/" Component={Home} />
          <Route exact path='/ideas' Component={Ideas} />
          <Route exact path="/ideas/new" Component={IdeaForm} />
          <Route exact path='/ideas/:id' Component={Idea} />
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
