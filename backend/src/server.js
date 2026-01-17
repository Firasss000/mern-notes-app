import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log('Server is running on localhost:', PORT);
});


// connection string for mongodb :
// mongodb+srv://firasbnd_db_user:b9h5MLvNobdqhg3S@cluster0.jftwvhx.mongodb.net/?appName=Cluster0
// pwd: b9h5MLvNobdqhg3S