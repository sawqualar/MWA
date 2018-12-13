import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb isVisible=true loggable="true" [listItems]="listItems"></app-dumb>
  `,
  styles: []
})

export class SmartComponent {
  @Input() listItems;
}