import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SpeakersComponent } from './containers/speakers/speakers.component';
import {SharedComponentsModule} from './shared-components/shared-components.module';
import { HomeObjectiveComponent } from './containers/home/home-objective/home-objective.component';
import { HomeWhatComponent } from './containers/home/home-what/home-what.component';
import { HomeCoverComponent } from './containers/home/home-cover/home-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    HomeObjectiveComponent,
    HomeWhatComponent,
    HomeCoverComponent,
    SpeakersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
