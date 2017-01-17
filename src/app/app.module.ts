import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, RootComponent } from './routes';

import { NotesService } from './services/notes.service';
import { AppComponent } from './components/app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        RootComponent,
        AppComponent,
        NotesComponent,
        NotesFormComponent,
        NotesListComponent,
        NoteItemComponent
    ],
    providers: [NotesService],
    bootstrap: [RootComponent]
})
export class AppModule { }
