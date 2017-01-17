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
        let newId = (_.maxBy(this.getNotes(), 'id')).id + 1;
        console.log(newId);
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