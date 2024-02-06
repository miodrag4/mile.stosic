import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

const ProjectDescription = () => {
  const { id } = useParams(); // Use useParams to access params

  // Fetch the project details based on the ID or use dummy data
  const project = {
    id: id,
    title: "Project Title",
    description: "Project ription",
    // Other project details
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Display other project details */}
    </div>
  );
};

export default ProjectDescription;