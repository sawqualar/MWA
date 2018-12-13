import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-dumb',
  template: `
    Exercise
      <ul>
      <li *ngFor="let item of listItems">{{item}}</li>
    </ul>
  `,
  styles: []
})

export class DumpComponent {
  @Input() listItems: string[];
}