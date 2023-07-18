import React from 'react';
import Idea from './Idea';

const IdeaList = ({ ideas, deleteIdea }) => {
  return (
    <ul>
      {ideas.map((idea) => (
        <Idea key={idea.id} idea={idea} deleteIdea={deleteIdea} />
      ))}
    </ul>
  );
};

export default IdeaList;
