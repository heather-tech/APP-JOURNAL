import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import IdeaForm from './IdeaForm';
import IdeaList from './IdeaList';
import NavBar from './NavBar';
// import Home from './Home';
// import ideasData from './db.json'

// function App() {
    
//   return (
//       <div>
//           <NavBar />
//           <Routes>              
//             <Route exact path="/">
//                   <Home />
//               </Route>
//               <Route exact path="/ideas">
//                   <ProjectList />
//               </Route>
//               <Route path="/ideas/new">
//                   <New Idea />
//               </Route>
//               <Route path="/ideas/:id">
//                   <My Ideas />
//               </Route>
//           </Routes>
//       </div>
//   );
// }



const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ideas")
      .then(r => r.json())
      .then(data => setIdeas(data))
  }, []);



  const saveIdeas = async () => {
    try {
      const response = await fetch('http://localhost:3001/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ideas }),
      });
      if (response.ok) {
        console.log('Ideas saved successfully!');
      } else {
        console.error('Failed to save ideas:', response.status);
      }
    } catch (error) {
      console.error('Error saving ideas:', error);
    }
  };

  const addIdea = (idea) => {
    const newIdea = { id: Date.now(), ...idea };
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id) => {
    const updatedIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(updatedIdeas);
  };

  const editIdea = (id, updatedIdea) => {
    const updatedIdeas = ideas.map((idea) =>
      idea.id === id ? { ...idea, ...updatedIdea } : idea
    );
    setIdeas(updatedIdeas);
  };

  useEffect(() => {
    saveIdeas();
  }, [ideas]);

  return (
    <div>
      <h1>APP JOURNAL</h1>
      <IdeaForm addIdea={addIdea} />
      <IdeaList ideas={ideas} deleteIdea={deleteIdea} editIdea={editIdea} />
    </div>
  );
};

export default App;
