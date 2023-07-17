import React, { useState, useEffect } from 'react'
import NewButton from './NewButton';
import IdeaLink from './IdeaLink';
import MyContext from './MyContext';




const Ideas = () => {
    return (
        <MyContext.Consumer>
        {context => {
                const ideasList = context.ideas.map(i => <IdeaLink key={i.id} idea={i} />)
                return(
                    <div>
                        <h3>My Ideas</h3> 
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

