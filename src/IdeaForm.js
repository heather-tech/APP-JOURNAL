import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

function IdeaForm() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [func, setFunc] = useState("");
    // title: '',
    // summary: '',
    // functionalities: '',
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault()
      const newIdea = {
          idea: { name, summary, func }
      }
      fetch("http://localhost:3001/ideas/new", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newIdea) 
  })
    .then(res => res.json())
    .then(data => {

      navigate(`/ideas/${data.idea.id}`)
    })
  }
 



  function handleChange(e) {
    setIdea({
      ...idea,
      [e.target.name] : e.target.value,
    })
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

export default IdeaForm
