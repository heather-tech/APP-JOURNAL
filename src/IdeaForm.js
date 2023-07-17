import React, { useState, useEffect, useCallback } from 'react';
import MyContext from './MyContext';



const IdeaForm = (props) => {
  const [idea, setIdea] = useState ({
    title: '',
    summary: '',
    functionalities: ''
  })

  return (
    <MyContext.Consumer>
        {context =>  {
            const handleChange = (e) => {
                setIdea(
                    {...idea, [e.target.name]: e.target.value}
                );
            }
        
            const handleSubmit = (e) => {
                e.preventDefault()
                const newIdea = {
                    appName: idea.appName,
                    summary: idea.summary,
                    functionalities: idea.functionalities,
                }
                context.addIdea(newIdea)
                props.history.push('/ideas')
            }

      return (
          <div>
              <form onSubmit={handleSubmit}>
                  <label>App Name:</label>
                  <br />
                  <input 
                    name="appName" 
                    onChange={handleChange} 
                    value={idea.appName} 
                    type="text" 
                  />
                  <br />
                  <label>Summary:</label>
                  <br />
                  <textarea 
                    name="summary" 
                    onChange={handleChange} 
                    value={idea.summary} 
                  />
                  <br />
                  <label>Functionalities:</label>
                  <br />
                  <textarea 
                    name="functionalities" 
                    onChange={handleChange} 
                    value={idea.functionalities} 
                  />
                  <br />
                  <input type="submit" />
              </form>
          </div>)
          }
      }
  </MyContext.Consumer>
);



}

export default IdeaForm
