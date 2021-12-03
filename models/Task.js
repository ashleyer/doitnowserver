const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  detail: String,
  deadline: {
    type: Date,
    Default: Date.now,
  },
  completed: Boolean,
  priority_rating: { type: Number, min: 1, max: 5 }
  
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
