
import Note from '../models/Note.js';
import mongoose from 'mongoose';

export async function getAllNotes (req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Fetch all notes from the database (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes: ', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function getNoteById (req, res) {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Note not found" });
    }

    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error('Error fetching note: ', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function createNote (req, res) {
  try {
    const {title, content} = req.body;
    const note = new Note({title, content});
    const savedNote = await note.save();
    res.status(201).json(savedNote);

  } catch (error) {
    console.error('Error creating note: ', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function updateNote (req, res) {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Note not found" });
    }

    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: `Note ${req.params.id} updated successfully!` });
  } catch (error) {
    console.error('Error updating note: ', error);
    res.status(500).json({ message: "Internal server error" });
  }

};

export async function deleteNote (req, res) {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: "Note not found" });
    }
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: `Note ${req.params.id} deleted successfully!` });
  } catch (error) {
    console.error('Error deleting note: ', error);
    res.status(500).json({ message: "Internal server error" });
  }
};