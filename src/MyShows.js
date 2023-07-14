import React, { useState, useEffect } from 'react'
import NewButton from './NewButton';
import ShowsLink from './ShowsLink';
import MyContext from './MyContext';



const Shows= () => {
    return (
        <MyContext.Consumer>
        {context => {
                const showsList = context.shows.map(s => <ShowsLink key={s.id} show={s} />)
                return(
                    <div>
                        <h3>My Shows</h3> 
                        <hr/>
                        {showsList}
                        <br/>
                        <br/>
                        <NewButton />    
                    </div>
                )
            }
        }
        </MyContext.Consumer>
    )
}

export default Shows