import mongoose from 'mongoose';
import Counter from './Counter.js';

const projectSchema = new mongoose.Schema({
  srNo: { type: Number, unique: true },
  title: String,
  tag: String,
  description: String,
  maxIndex: String,
  // images: [String]  
  // Base64 encoded strings
});

// Pre-save hook to increment srNo
projectSchema.pre('save', async function(next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { model: 'Project' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.srNo = counter.seq;
  }
  next();
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
