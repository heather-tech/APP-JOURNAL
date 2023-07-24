import React, { useState } from 'react';


const IdeaForm = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/ideas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ title:title, description:description }),
    })
    .then(r => r.json())
    .then(ideaObject => {
      console.log(ideaObject)
          addIdea( ideaObject );

    setTitle('');
    setDescription('');
    })

        .catch(err => {
          console.log(err)
        })
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
      <button type='submit' >Add Idea</button>
    </form>
  );
};

export default IdeaForm;
