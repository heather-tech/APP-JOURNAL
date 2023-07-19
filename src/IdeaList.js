import React from 'react';
import Idea from './Idea';

const IdeaList = ({ ideas, deleteIdea }) => {
  return (
    <div>
      {ideas.map((idea) => {
        <Idea 
          key={idea.id} 
          idea={idea} 
          deleteIdea={deleteIdea} />
      })}
    </div>
  );
};

export default IdeaList;
