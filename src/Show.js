import React from 'react'
// import MyContext from './MyContext';

const Show = (props) => {
    return (
        <MyContext.Consumer>
        {context => {
            if (context.shows.length === 0 ) {
                return (
                    <h5>Loading....</h5>
                )
            } else {
                const show = context.shows.find(s => `${s.id}` === props.match.params.id)
    
                return (
                    <div>
                        <h2>{show.title}</h2>
{/*     
                        <hr />
                        <h3>Summary:</h3>
                        <h3>{show.summary}</h3>
                        <br />
                        <h4>Body:</h4>
                        <h4>{show.body}</h4> */}
                    </div>
                )
            }
        }}
        </MyContext.Consumer>
    )
}

export default Story