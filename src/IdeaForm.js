import React, { useState } from 'react';


const IdeaForm = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [func, setFunc] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/ideas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ title:title, description:description, func:func }),
    })
    .then(r => r.json())
    .then(ideaObject => {
      console.log(ideaObject)
          addIdea( ideaObject );
        // clear all input values
    setTitle('');
    setDescription('');
    setFunc('')
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
        <br />
      <textarea
        placeholder="Brief Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        
      <input
        type="text"
        placeholder="Functionalities"
        value={func}
        onChange={(e) => setFunc(e.target.value)}
      />
      <br />
    
      <button type="submit">Add Idea</button> 
 
    </form>
  );
};

export default IdeaForm;
