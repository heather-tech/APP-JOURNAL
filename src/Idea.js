import React, { useState } from 'react'


function NewIdea({  }) {
    const [body, setBody] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const data = {

        }
    }
}
const Idea = (idea) => {

    return (
        <div>
            
            <h2>{idea.appName}</h2>
            <hr />
            <h3>Summary:</h3>
            <h3>{idea.summary}</h3>
            <br />
            <h4>Functionalities:</h4>
            <h4>{idea.functionalities}</h4>
            
        </div>
    )
}

export default Idea