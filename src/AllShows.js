import React, { useState, useEffect, useCallback } from 'react';
import MyShows from './MyShows';
import Info from './Info'

const AllShows = (props) => {
  const [shows, setShows] = useState ({
    title: '',
    summary: '',
    body: ''
  })

//   const [myShows, setMyShows] = useState ({
//     title: '',
//     summary: '',
//     body: '',

//   })

  const getShow = useCallback (
    () => {
        fetch(`https://api.tvmaze.com/shows`)
        .then(res => res.json())
        .then(data => {
            return data
            // console.log(data)
            // setMyShows({
            //     title: data[0].title,
            //     summary: data[0].summary,
            //     body: data[0].body

            // })
        })
    }
  )

//   useEffect(() => {
//     getShow()
//   }, [getShow])

//   useEffect(() => {
//     fetch('https://api.tvmaze.com/search/shows?q=:query')
//     .then(r => r.json())
//     .then(data => {
//       console.log(data)  
//     })
//   })

//   return (
    // <MyContext.Consumer>
        // {context =>  {
            // const handleChange = (e) => {
            //     setMyShows(
            //         {...shows, [e.target.name]: e.target.value}
            //     );
            // }
        
            const handleSubmit = (e) => {
                e.preventDefault()
                const newShow = {
                    title: shows.title,
                    summary: shows.summary,
                    body: shows.body,
                }
                // context.addShow(newShow)
                // props.history.push('/shows')
            }

        // return (
        //     <div>
        //         <Word changeTheWord={changeWord} storyWord={word}/>
        //         <form onSubmit={handleSubmit}>
        //             <label>Title:</label><br />
        //             <input name="title" onChange={handleChange} value={shows.title} type="text" /><br />
        //             <label>Summary:</label><br />
        //             <textarea name="summary" onChange={handleChange} value={shows.summary} /><br />
        //             <label>Body:</label><br />
        //             <textarea name="body" onChange={handleChange} value={shows.body} /><br />
        //             <input type="submit" />
        //         </form>
        //     </div>)
            // )}
//         }
//     </MyContext.Consumer>
// );



}

export default AllShows
