import React from 'react'
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <Link to={'/myShows/new'}>
            <button>Click the button to add your idea!</button>
        </Link>
       
    )
}

export default NewButton;