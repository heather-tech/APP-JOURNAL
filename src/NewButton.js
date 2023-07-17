import React from 'react'
import { Link } from 'react-router-dom'

const NewButton = () => {
    return (
        <Link to={'/ideas/new'}>
            <button>Add a new idea!</button>
        </Link>
       
    )
}

export default NewButton;