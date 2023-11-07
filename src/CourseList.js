import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/courses') // Replace with your MongoDB endpoint
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Course List</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search courses by name or instructor"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-group">
        {filteredCourses.map((course) => (
          <li key={course._id} className="list-group-item">
            <a href={`/course/${course._id}`}>{course.name}</a> - {course.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
