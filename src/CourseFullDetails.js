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
        <h2 className="card-title" style={{ textDecoration: 'underline' }}>{course.name}</h2>
          <p className="card-subtitle mb-2 text-muted">Instructor: {course.instructor}</p>
          <p className="card-text">Description: {course.description}</p>
          <p className="card-text">Enrollment Status: {course.enrollmentStatus}</p>
          <p className="card-text">Course Duration: {course.duration}</p>
          <p className="card-text">Schedule: {course.schedule}</p>
          <p className="card-text">Location: {course.location}</p>
          <p className="card-text">Pre-requisites: {course.prerequisites}</p>

          <div>
            <h3>Syllabus</h3>
            <ul className="list-group">
              {course.syllabus.map((item) => (
                <li key={item._id} className="list-group-item">
                  <p>Week: {item.week}</p>
                  <p>Topic: {item.topic}</p>
                  <p>Content: {item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
