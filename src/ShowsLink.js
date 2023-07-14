import React from 'react'
import { Link } from 'react-router-dom'

const ShowsLink = ({show}) => {
        return (
            <div>
                <Link key={show.id} to={`/shows/${show.id}`}>
                    <li>{show.title}</li>
                </Link>

            </div>
            
        )
    } 

export default ShowsLink