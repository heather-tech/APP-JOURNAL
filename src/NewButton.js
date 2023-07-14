import React from 'react'
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <Link to={'/myShows/new'}>
            <button>Click button to see new shows!</button>
        </Link>
       
    )
}

export default NewButton;