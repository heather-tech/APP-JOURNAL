import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import NavBar from './NavBar';
import Home from './Home';


function App() {
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
    const updatedIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(updatedIdeas);
  };

  const editIdea = (id, updatedIdea) => {
    const updatedIdeas = ideas.map(idea =>
      idea.id === id ? { ...idea, ...updatedIdea } : idea
    );
    setIdeas(updatedIdeas);
  };


  return (
    <div>
      <NavBar />
      {/* <IdeaForm addIdea={addIdea} /> */}
      {/* <IdeaList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} /> */}
      <Routes>              
        <Route path="/" element={<Home />} />
        <Route path="/ideas/new" element={<IdeaForm />} />
        <Route path="/ideas" element={<IdeaList />} />
      </Routes>
 
    </div>
    );
};

export default App;
