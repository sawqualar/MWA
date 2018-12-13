
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<app-smart [listItems]="listItems"></app-smart>',
  styleUrls: []
})
export class AppComponent {
  listItems = ["item1", "item2", "item3"];
}