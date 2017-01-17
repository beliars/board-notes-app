import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../../shared/note.model';

import './note-item.component.scss';
@Component({
    selector: 'note-item',
    template: require('./note-item.component.html')
})
export class NoteItemComponent {
    @Input() noteItem: Note;
    @Output() onDeleteNote;
    constructor() {
        this.onDeleteNote = new EventEmitter();
     }

     deleteNote(noteItem) {
         this.onDeleteNote.emit(noteItem);
     }
}