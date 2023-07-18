import React, { useState } from "react";

function EditIdea ({ body }) {
  const [ideaBody, setIdeaBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="edit-idea" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={ideaBody}
        onChange={(e) => setIdeaBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditIdea;