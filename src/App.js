import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import MyShows from './MyShows';
import AllShows from './AllShows';
import './App.css';



const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/shows" Component={AllShows} />
          <Route exact path='/shows/:id' Component={MyShows} />
          {/* <Route exact path='/' Component={Home} /> */}
        </Routes>

      </div>


    </Router>
   
  );
}

export default App;
