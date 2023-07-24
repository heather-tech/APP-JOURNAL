import React, { useState } from 'react';


const IdeaForm = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [func, setFunc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/ideas', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ title:title, description:description, func:func }),
    })
    .then(r => r.json())
    .then(ideaObject => {
      console.log(ideaObject)
          addIdea( ideaObject );

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
      <textarea
        placeholder="Brief Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Functionalities"
        value={func}
        onChange={(e) => setFunc(e.target.value)}
      />
      <input type="submit" />
      {/* <button type='submit' >Add Idea</button> */}
    </form>
  );
};

export default IdeaForm;
