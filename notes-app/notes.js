const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your Notes ...';

const addNote = (title , body) => {
	const notes = loadNotes();
	const dup = notes.filter((note) => { return title === note.title;});

	if(dup.length === 0) {
		notes.push({
			title : title,
			body: body
		});
		saveNotes(notes);
		console.log(chalk.green.inverse('Saving note'));
	} else console.log(chalk.red.inverse('Note Title Taken'));	
};

const removeNote = (title) => {
	const notes = loadNotes();
	const newNotes = notes.filter((note) => { return title !== note.title; });
	if(notes.length === newNotes.length) console.log(chalk.red.inverse('404 Note with title ' + title + ' was not found'));
	else {
		saveNotes(newNotes);
		console.log(chalk.green.inverse('Deleting Note with title ' + title));
	}
}

const saveNotes = (notes) => { fs.writeFileSync('notes.json' , JSON.stringify(notes)); }

const loadNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('notes.json').toString());
	} catch(err) {
		return [];
	}
}

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
};
