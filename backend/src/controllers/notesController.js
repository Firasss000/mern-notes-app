
export function getAllNotes (req, res) {
  res.status(200).send('Hello from the backend!');
};

export function createNote (req, res) {
  res.status(201).json({ message: 'Note created successfully!' });
};

export function updateNote (req, res) {
  res.status(200).json({ message: `Note ${req.params.id} updated successfully!` });
};

export function deleteNote (req, res) {
  res.status(200).json({ message: `Note ${req.params.id} deleted successfully!` });
};