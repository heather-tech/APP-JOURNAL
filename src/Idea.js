import React from 'react'
import MyContext from './MyContext';

const Idea = (props) => {
    return (
        <MyContext.Consumer>
        {context => {
            if (context.ideas.length === 0 ) {
                return (
                    <h5>Loading....</h5>
                )
            } else {
                const idea = context.ideas.find(i => `${i.id}` === props.match.params.id)
    
                return (
                    <div>
                        <h2>{idea.title}</h2>
                        <hr />
                        <h3>Summary:</h3>
                        <h3>{idea.summary}</h3>
                        <br />
                        <h4>Body:</h4>
                        <h4>{idea.body}</h4>
                        <br />
                        <h4>Functionalities:</h4>
                        <h4>{idea.functionalities}</h4>
                        
                    </div>
                )
            }
        }}
        </MyContext.Consumer>
    )
}

export default Idea