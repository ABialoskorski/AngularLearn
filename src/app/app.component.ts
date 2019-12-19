import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appText = 'Tekst z App Component';
  ChildText = ''
  httpEvent(text): void {
    this.ChildText = text;
  }

}
