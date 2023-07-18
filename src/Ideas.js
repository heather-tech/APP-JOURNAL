import React from 'react'
import NewButton from './NewButton';
import IdeaLink from './IdeaLink';
import IdeaForm from './IdeaForm';

function Ideas({ ideas, onDeleteIdea, onUpdateIdea }) {
    const ideaList = ideas.map((idea) => (
      <IdeaForm
        key={idea.id}
        idea={idea}
        onDeleteIdea={onDeleteIdea}
        onUpdateIdea={onUpdateIdea}
      />
    ));


    // const ideasList = context.ideas.map(i => <IdeaLink key={i.id} idea={i} />)
    return(
        <div>
            <h3>My ideas</h3> 
            <hr/>
            {ideaList}
            <br/>
            <br/>
            <NewButton />    
        </div>
    )
            
}

export default Ideas

