import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const projectSchema = new mongoose.Schema({
  srNo: { type: Number, unique: true },
  title: String,
  tag: String,
  description: String,
  images: [String]  // Base64 encoded strings
});

// Apply the auto-increment plugin to the schema
projectSchema.plugin(AutoIncrement, { inc_field: 'srNo' });

const Project = mongoose.model('Project', projectSchema);

export default Project;
