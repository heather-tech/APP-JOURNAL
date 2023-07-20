import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import NavBar from './NavBar';
import Home from './Home';


// function App() {
    


const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ideas")
      .then(r => r.json())
      .then(data => setIdeas(data))
  }, []);

  const addIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  const deleteIdea = (id) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(updatedIdeas);
  };

  const editIdea = (id, updatedIdea) => {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id ? { ...idea, ...updatedIdea } : idea
    );
    setIdeas(updatedIdeas);
  };


  // useEffect(() => {
  //   saveIdeas();
  // }, [ideas]);

  return (
    <div>
      <h1>APP JOURNAL</h1>
      <NavBar />
      <IdeaForm addIdea={addIdea} />
      <IdeaList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} />
        <NavBar />
        <Routes>              
          <Route path="/" element={<Home />} />
          <Route exact path="/ideas" element={<IdeaList />} />
          <Route path="/ideas/new" element={<IdeaForm />} />
          </Routes>
                

            {/* <Route path="/ideas">
                <MyIdeas />
            </Route> */}
 
    </div>
    );
};

export default App;
