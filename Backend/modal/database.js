const mongoose = require('mongoose');

// Define the schema
const feedbackSchema = new mongoose.Schema({
  // Define the structure of the 'feedback' collection
  name: String,
  email: String,
  subject: String,
  message: String,
  // Add more fields as needed
});

// Create a model based on the schema for the 'feedback' collection
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = { Feedback }; // Export the Feedback model
