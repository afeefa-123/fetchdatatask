const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/courses');

const coursesRouter = require('./routes/courses');
app.use('/courses', coursesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
