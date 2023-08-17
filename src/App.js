import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import NavBar from './NavBar';
import Home from './Home';


function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ideas")
      .then(r => r.json())
      .then(data => setIdeas(data))
  }, []);

  const addIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  const deleteIdea = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/ideas/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        const updatedIdeas = ideas.filter((idea) => idea.id !== id);
        setIdeas(updatedIdeas);
      } else {
        console.error('Failed to delete idea', response.status);
      }
    } catch (error) {
      console.error('Error deleting idea', error);
    }
  };
  // (id) => {
  //   const updatedIdeas = ideas.filter(idea => idea.id !== id);
  //   setIdeas(updatedIdeas);
  

  const editIdea = (id, updatedIdea) => {
    const updatedIdeas = ideas.map(idea =>
      idea.id === id ? { ...idea, ...updatedIdea } : idea
    );
    setIdeas(updatedIdeas);
  };
  


  return (
    <div>
      <NavBar />
      
      
      <Routes>              
        <Route path="/" element={<Home />} />
        <Route path="/ideas/new" element={<IdeaForm  addIdea={addIdea}/>} />
        <Route path="/ideas" element={<IdeaList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} />} />
      </Routes>
 
    </div>
    );
};

export default App;
