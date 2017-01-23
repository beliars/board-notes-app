import { Directive, ElementRef } from '@angular/core';

import * as masonry from 'masonry-layout';

@Directive({ 
    selector: '[notesGridDirective]' 
})

export class NotesGridDirective {
    
    constructor(private element: ElementRef) {
    }

    ngAfterContentInit() {
        let el = this.element.nativeElement.parentElement.parentElement;
        setTimeout(() => {
            let msnry = new masonry(el, {
                itemSelector: '.note-item',
                columnWidth: 210,
                gutter: 10
            });
        });
    }

    ngAfterViewInit() {
        let el = this.element.nativeElement.parentElement.parentElement;
            let msnry = new masonry(el, {
                itemSelector: '.note-item',
                columnWidth: 210,
                gutter: 10
            });
    }
}