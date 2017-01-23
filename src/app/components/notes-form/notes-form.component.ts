import { Component, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../services/notes.service';

import './notes-form.component.scss';

@Component({
	selector: 'notes-form',
	template: require('./notes-form.component.html')
})

export class NotesFormComponent {
	@Output() addNote;
	newNote = {
		id: null,
		text: ''
	};

	constructor(private notesService: NotesService) {
		this.addNote = new EventEmitter();
	}

	onSubmit(event, form) {
		event.preventDefault();
		if(form.valid) {
			this.addNote.emit(this.newNote.text);
			form.reset();
		}
	}
}
