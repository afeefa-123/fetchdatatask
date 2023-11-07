import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/courses') // Replace with your API endpoint
      .then((response) => {
        setEnrolledCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  const markCourseAsCompleted = (id) => {
    // Send a request to your API to mark the course as completed
    axios
      .put(`http://localhost:8080/courses/${id}`) // Replace with your API endpoint
      .then((response) => {
        // Update the local state to reflect the change in course completion status
        const updatedCourses = enrolledCourses.map((course) => {
          if (course._id === id) {
            return { ...course, completed: true };
          }
          return course;
        });

        setEnrolledCourses(updatedCourses);
      })
      .catch((error) => {
        console.error('Error marking course as completed:', error);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <div className="row">
        {enrolledCourses.map((course) => (
          <div key={course._id} className="col-lg-4 mb-3">
            <div className={`card ${course.completed ? 'border-success' : ''}`}>
              <img
                src={course.thumbnail}
                className="card-img-top"
                style={{ width: '200px', height: '150px' }}
                alt={course.name}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">Instructor: {course.instructor}</p>
                <p className="card-text">Due Date: {course.dueDate}</p>
                {course.completed ? (
                  <p className="text-success">Course Completed</p>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate('/list')} // Use the navigate function here
                  >
                    More data
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
