import React, { useState, useEffect } from 'react'

const MyContext = React.createContext();

export default MyContext;

const MyProvider = (props) => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/shows")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShows(data)
        })
    }, [])

    const addShow = (show) => {
        console.log("The Show", show)
        fetch("http://localhost:3001/shows", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(show) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setShows([...shows, data])
        })
    }

    return (<MyContext.Provider value={{
            shows: shows, 
            addShow: addShow
        }}>{props.children}
        </MyContext.Provider>)
    
}

const MyConsumer = MyContext.Consumer

export  { MyProvider, MyConsumer };