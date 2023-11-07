import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

  if (!course) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <p className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</p>
          <p className="card-text">{course.description}</p>
          {/* Add more course details as needed */}
          {/* Add a button that navigates to another page */}
          <a href={`/coursedatafull/${course._id}`} className="btn btn-primary">More Details</a>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
