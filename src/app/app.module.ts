// Angular CLI Scaffold
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Application
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

// Routing
const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  /* { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Material Design Animation
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
