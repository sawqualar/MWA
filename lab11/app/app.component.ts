import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter : number = 5;
  title = 'my-new-app';

  public componentCounterValue; 
  showCounterData(data){
    
    this.componentCounterValue = data;
  }
  
}
