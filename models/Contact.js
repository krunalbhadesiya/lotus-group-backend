import mongoose from 'mongoose';
import AutoIncrement from 'mongoose-sequence';

const contactSchema = new mongoose.Schema({
  srNo: { type: Number, unique: true },
  name: String,
  email: String,
  phone: String,
  message: String
});

// Apply the auto-increment plugin to the schema
contactSchema.plugin(AutoIncrement, { inc_field: 'srNo' });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
