import { Component } from '@angular/core';

import './app.component.scss';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})

export class AppComponent {
  title: string;

  constructor() {
	  this.title = 'Notes app';
  }
}
