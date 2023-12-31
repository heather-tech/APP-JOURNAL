import React from 'react';
import Idea from './Idea';

const IdeaList = ({ideas, deleteIdea, editIdea}) => {

  return (
    <div>
      {ideas.map((idea) => {
        return(
          
            <Idea 
              key={idea.id} 
              idea={idea} 
              deleteIdea={() => deleteIdea(idea.id)} 
              // deleteIdea={deleteIdea} 
              editIdea={editIdea} 
            />
          
        );
      })}
    </div>
  );
};

export default IdeaList;
