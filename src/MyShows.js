import React, { useState, useEffect } from 'react'
import NewButton from './NewButton';
import ShowsLink from './ShowsLink';
import AllShows from './AllShows'



const myShows = () => {

    const [myShows, setMyShows] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/shows/:id`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyShows(data)
        })
    }, [])

    const showsList = myShows.map(s => <ShowsLink show={s} />)
    return (
        <div>
            <h3>My Shows</h3>
            <hr/>
            {showsList}
            <br />
            <br />
            <NewButton />
        </div>
    )
}

export default MyShows;