import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {SpeakersComponent} from './containers/speakers/speakers.component'; // CLI imports router

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: '**', redirectTo: '/' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
