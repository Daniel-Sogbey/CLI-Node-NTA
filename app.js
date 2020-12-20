const yargs = require("yargs");
const notes = require("./notes");

//Customize yargs version

yargs.version("1.1.0");

//add, remove, read list

//Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: argv => {
    notes.addNotes(argv.title, argv.body);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
  },
});

//Create remove command

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note to remove title",
      demandOption: true,
      type: "string",
    },
  },
  handler: argv => {
    notes.removeNotes(argv.title);
    // console.log("Removing a note");
  },
});

//Create list command

yargs.command({
  command: "list",
  describe: "Listing a note",

  handler: () => {
    notes.listNotes();
    // console.log("Listing all notes");
  },
});

//Create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: argv => {
    notes.readNotes(argv.title);
    // console.log("Reading note");
  },
});

//Get note file size

yargs.command({
  command: "getFileSize",
  describe: "Note file size",
  handler: () => {
    notes.getFileSize();
  },
});

yargs.parse();

// console.log(yargs.argv);
