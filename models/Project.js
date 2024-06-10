import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  srNo: Number,
  title: String,
  tag: String,
  description: String,
  images: [String]  // Base64 encoded strings
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
