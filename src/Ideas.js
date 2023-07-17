import React from 'react'
import MyContext from './MyContext';
import NewButton from './NewButton';
import IdeaLink from './IdeaLink';

const Ideas= () => {
    return (
        <MyContext.Consumer>
        {context => {
                const ideasList = context.ideas.map(i => <IdeaLink key={i.id} idea={i} />)
                return(
                    <div>
                        <h3>My ideas</h3> 
                        <hr/>
                        {ideasList}
                        <br/>
                        <br/>
                        <NewButton />    
                    </div>
                )
            }
        }
        </MyContext.Consumer>
    )
}

export default Ideas

