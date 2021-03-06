import { Injectable } from '@angular/core';

import { Note } from '../shared/note.model';

import * as _ from 'lodash';

@Injectable()
export class NotesService {

    notes: Note[];

    constructor() { 
    }

    getNotes() {
        this.notes = JSON.parse(localStorage.getItem('boardNotes'));
        if(this.notes == null) {
            return this.notes = [];
        }
        else return this.notes;
    }

    addNote(noteText) {
        let newId = 0;
        if(this.getNotes().length) {
            newId = (_.maxBy(this.notes, 'id')).id + 1;
        }
        else newId = 1;
        let newNote = {
            id: newId,
            text: noteText
        };
        this.notes.push(newNote);
        localStorage.setItem('boardNotes', JSON.stringify(this.notes));
    }

    deleteNote(noteItem) {
        let index = _.findIndex(this.getNotes(), {'id': noteItem.id});
        this.notes.splice(index, 1);
        localStorage.setItem('boardNotes', JSON.stringify(this.notes));
    }
}