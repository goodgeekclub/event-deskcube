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
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HomeLocationComponent } from './containers/home/home-location/home-location.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeCalendarComponent } from './containers/home/home-calendar/home-calendar.component';
import {MatTableModule} from '@angular/material/table';
import { SpeakerCardComponent } from './containers/speakers/speaker-card/speaker-card.component';
import { HomePricingComponent } from './containers/home/home-pricing/home-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    HomeObjectiveComponent,
    HomeWhatComponent,
    HomeCoverComponent,
    SpeakersComponent,
    HomeLocationComponent,
    HomeCalendarComponent,
    SpeakerCardComponent,
    HomePricingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
