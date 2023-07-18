import React, {useEffect, useState } from 'react'
import NewButton from './NewButton';
import IdeaLink from './IdeaLink';
import IdeaForm from './IdeaForm';

function MyIdeas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("/ideas")
      .then(r => r.json())
      .then(data => setIdeas(data.ideas))
  }, [])

  const ideaList = ideas.map((idea) => (
    <IdeaLink
      key={idea.id}
      idea={idea}
    />
  ))

  return (
    <section id="idea">
      <h1>My Ideas</h1>
      <div id="my-ideas">{MyIdeas}</div>
    </section>
  )
}

// function MyIdeas({ ideas, onDeleteIdea, onUpdateIdea }) {
//     const ideaList = ideas.map((idea) => (
//       <IdeaLink
//         key={idea.id}
//         idea={idea}
//         onDeleteIdea={onDeleteIdea}
//         onUpdateIdea={onUpdateIdea}
//       />
//     ));


//     // const ideasList = context.ideas.map(i => <IdeaLink key={i.id} idea={i} />)
//     return(
//         <div>
//             <h3>My ideas</h3> 
//             <hr/>
//             {ideaList}
//             <br/>
//             <br/>
//             <NewButton />    
//         </div>
//     )
            
// }

export default MyIdeas;

