import React, { useState } from "react";

function IncidentForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !date) {
      alert(
        "Please enter an incident with a description and the date it occurred."
      );
      return;
    }

    onSubmit({ title, date, description });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h1>Incident Logger</h1>
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />
      <label>Date:</label>
      <input type="date" value={date} onChange={handleDateChange} />
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default IncidentForm;
