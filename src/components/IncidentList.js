import React, { useState } from "react";
import IncidentForm from "./IncidentForm.js";

function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  const addIncident = (incident) => {
    setIncidents([...incidents, incident]);
  };

  return (
    <div>
      <IncidentForm onSubmit={addIncident} />
      <h2>Incidents</h2>
      {incidents.map((incident, index) => (
        <div key={index} className="incident">
          <strong>
            {incident.name} - {incident.date}
          </strong>
          <div className="incident-title">{incident.title}</div>
          <p>{incident.description}</p>
        </div>
      ))}
    </div>
  );
}

export default IncidentList;
