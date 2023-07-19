import React, { useState, useEffect } from 'react';
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import Home from './Home';
import ideasData from './db.json'

const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await fetch('./db.json');
      const data = await response.json();
      setIdeas(data.ideas);
    } catch (error) {
      console.error('Error fetching ideas:', error);
    }
  };

  const saveIdeas = async () => {
    try {
      const response = await fetch('./db.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ideas }),
      });
      if (response.ok) {
        console.log('Ideas saved successfully!');
      } else {
        console.error('Failed to save ideas:', response.status);
      }
    } catch (error) {
      console.error('Error saving ideas:', error);
    }
  };

  const addIdea = (idea) => {
    const newIdea = { id: Date.now(), ...idea };
    setIdeas([...ideas, newIdea]);
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

  useEffect(() => {
    saveIdeas();
  }, [ideas]);

  return (
    <div>
      <h1>Idea App</h1>
      <IdeaForm addIdea={addIdea} />
      <IdeaList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} />
    </div>
  );
};

export default App;
