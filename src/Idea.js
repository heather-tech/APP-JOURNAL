import React from 'react';

const Idea = ({ idea, deleteIdea }) => {
  return (
    <li>
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <button onClick={() => deleteIdea(idea.id)}>Delete</button>
    </li>
  );
};

export default Idea;
