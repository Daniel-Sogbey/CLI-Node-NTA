const chalk = require("chalk");

const fs = require("fs");

const addNotes = function(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  console.log(duplicateNote);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note saved successfully"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const removeNotes = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.bgGreen("Note removed"));
  } else {
    console.log(chalk.bgRed("No note found"));
  }

  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes"));
  notes.forEach(note => console.log(note.title));
};

const readNotes = title => {
  const notes = loadNotes();

  const foundNote = notes.find(note => note.title === title);

  if (foundNote !== undefined) {
    console.log(chalk.bgGreen.inverse(foundNote.title));
    console.log(foundNote.body);
  } else {
    console.log(chalk.bgRed.inverse("No note found with the provided title."));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);

  fs.writeFileSync("notes.json", notesJSON);
};

module.exports = {
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
