import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart.component';
import { DumpComponent } from './dump.component';
import { IsVisibleDirective } from './isVisible.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumpComponent,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }