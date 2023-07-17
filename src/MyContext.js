import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [ideas, setIdeas] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/ideas")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIdeas(data)
        })
    }, [])

    const addIdea = (idea) => {
        console.log(idea)
        fetch("http://localhost:3001/ideas", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idea) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIdeas ([...ideas, data])
        })
    }

    return (<MyContext.Provider value={{
            ideas: ideas, 
            addIdea: addIdea
        }}>{props.children}
        </MyContext.Provider>)
    
}

const MyConsumer = MyContext.Consumer

export  { MyProvider, MyConsumer };


export default MyContext;