import React from 'react'
import { Link } from 'react-router-dom'

const IdeaLink = ({idea}) => {
        return (
            <div>
                <Link key={idea.id} to={`/ideas/${idea.id}`}>
                    <li>{idea.appName}</li>
                </Link>

            </div>
            
        )
    } 

export default IdeaLink