import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NavbarComponent} from './nabvbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports:[
    RouterModule,
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedComponentsModule { }
