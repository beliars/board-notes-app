import { Component, OnInit } from '@angular/core';

import { NotesService } from '../../services/notes.service';
import { Note } from '../../shared/note.model';

import './notes.component.scss';
@Component({
	selector: 'notes',
	template: require('./notes.component.html')
})

export class NotesComponent implements OnInit {
	notesList: Note[];
	
	constructor(private notesService: NotesService) {
	}

	ngOnInit() {
		this.getNotesList();
	}

	onAddNote(newNoteText) {
		console.log();
		this.notesService.addNote(newNoteText);
		this.getNotesList();
	}

	getNotesList() {
		this.notesList = this.notesService.getNotes();
	}

	onDeleteNote(noteItem) {
		console.log(noteItem);
		this.notesService.deleteNote(noteItem);
		this.getNotesList();
	}
}
