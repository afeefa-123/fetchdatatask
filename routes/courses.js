const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a new course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the course' });
  }
});

// Fetch all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch courses' });
  }
});

// Fetch course details by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch course details' });
  }
});

// API route to get enrolled courses
router.get('/api/enrolled-courses', async (req, res) => {
  try {
    const enrolledCourses = await Course.find();
    res.json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch enrolled courses' });
  }
});
// Add other routes for updating and deleting courses
router.put('/mark-course-as-completed/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find the course by its ID in the database
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Mark the course as completed
    course.completed = true;

    // Save the updated course to the database
    await course.save();

    res.json({ message: 'Course marked as completed' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to mark the course as completed' });
  }
});
module.exports = router;
