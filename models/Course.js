const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: Number, // Unique identifier for the course
    name: String, // Name of the course
    instructor: String, // Name of the course instructor
    description: String, // Description of the course
    enrollmentStatus: {
      type: String,
      enum: ['Open', 'Closed', 'In Progress'],
    },
    thumbnail: String, // Link to the course thumbnail
    duration: String, // Duration of the course
    schedule: String, // Schedule of the course
    location: String, // Location of the course
    prerequisites: [String], // Array of prerequisites
    syllabus: [
      {
        week: Number,
        topic: String,
        content: String,
      },
    ],
    students: [
      {
        id: Number,
        name: String,
        email: String,
      },
    ],
  });


module.exports = mongoose.model('Course', courseSchema);
