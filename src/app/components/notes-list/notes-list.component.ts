import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../../shared/note.model';

import './notes-list.component.scss';

import * as masonry from 'masonry-layout';

@Component({
	selector: 'notes-list',
	template: require('./notes-list.component.html')
})

export class NotesListComponent {
	@Input() notesList: Note[];
	@Output() onDeleteNoteItem;

	constructor() {
		this.onDeleteNoteItem = new EventEmitter();
	}

	onDeleteNote(noteItem) {
		 this.onDeleteNoteItem.emit(noteItem);
	}
}
