import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {SpeakersComponent} from './containers/speakers/speakers.component'; // CLI imports router

const routes: Routes = [
  { path: '',  pathMatch:'full', component: HomeComponent},
  { path: 'speakers', component: SpeakersComponent },
  { path: '**', redirectTo: '/' },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
