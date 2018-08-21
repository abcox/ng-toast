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
import { TestComponent1 } from './test1/test.component';
import { TestComponent2 } from './test2/test.component';
//import { TestComponent3 } from './test3/test.component';

// Routing
const appRoutes: Routes = [
  { path: 'route1', component: TestComponent1 },
  { path: 'route2', component: TestComponent2 },
  //{ path: 'route3', component: TestComponent3 },
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
    TestComponent1,
    TestComponent2,
    //TestComponent3,
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
