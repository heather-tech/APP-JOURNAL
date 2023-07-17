import React from 'react'
import { Link } from 'react-router-dom'

const IdeaLink = ({idea}) => {
        return (
            <div>
                <Link key={idea.id} to={`/shows/${idea.id}`}>
                    <li>{idea.title}</li>
                </Link>

            </div>
            
        )
    } 

export default IdeaLink