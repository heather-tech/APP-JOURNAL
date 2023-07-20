import React, { useState } from 'react';
import Button from '@mui/material/Button';

const IdeaForm = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIdea({ title, description });
    setTitle('');
    setDescription('');
  };

  const saveIdeas = async () => {
    try {
      const response = await fetch('http://localhost:3001/ideas', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ addIdea }),
      });
      if (response.ok) {
        console.log('Ideas saved');
      } else {
        console.error('Failed to save:', response.status);
      }
    } catch (error) {
      console.error('Error saving:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="App Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained">Add Idea</Button>
    </form>
  );
};

export default IdeaForm;
