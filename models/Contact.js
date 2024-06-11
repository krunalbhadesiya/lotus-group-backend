import mongoose from 'mongoose';
import Counter from './Counter.js';

const contactSchema = new mongoose.Schema({
  srNo: { type: Number, unique: true },
  name: String,
  email: String,
  phone: String,
  message: String
});

// Pre-save hook to increment srNo
contactSchema.pre('save', async function(next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { model: 'Contact' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.srNo = counter.seq;
  }
  next();
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
