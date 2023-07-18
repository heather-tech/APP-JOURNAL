import React, { useState, useEffect, useCallback } from 'react';

function IdeaForm({ addIdea }) {
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    functionalities: ''
  })


function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
}

function handleSubmit(e) {
  e.preventDefault()

  const newIdea = {
    ...formData,
  }

fetch("http://localhost:3001/ideas", {
  method: "POST",
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(newIdea) 
})
  .then(res => res.json())
  .then(addIdea)
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
