// Angular CLI Scaffold
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Application
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Material Design Animation
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
