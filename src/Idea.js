import React, { useState } from 'react';


const Idea = ({ idea, deleteIdea, editIdea }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(idea.title);
  const [description, setDescription] = useState(idea.description);
  const [func, setFunc] = useState(idea.func);


  const handleEdit = (e) => {
    e.preventDefault();
    editIdea(idea.id, { title, description, func });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            placeholder="Functionalities"
            value={func}
            onChange={(e) => setFunc(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      
    );
  }

  return (
    <div className='idea-card'>
      <h3>{idea.title}</h3>
      <p>Description: {idea.description}</p>
      <p>Functionalities: {idea.func}</p>
      <button onClick={() => deleteIdea(idea.id)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
};

export default Idea;
