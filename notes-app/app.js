const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: ( argv ) => { notes.addNote(argv.title , argv.body); }
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder : {
		title: {
			describe: 'Note Title to remove',
			demandOption: true,
			type: 'string'
		}
	},
	handler: ( argv ) => { notes.removeNote(argv.title); }
});

yargs.command({
	command: 'list',
	describe: 'List notes',
	handler: () => { notes.listNotes(); } 
});

yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder : {
		title: {
			describe: 'Note Title to read',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => { console.log(notes.readNotes(argv.title)); }
});

yargs.parse();
