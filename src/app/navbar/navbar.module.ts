import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import { SwitchButtonModule } from './../switch-button/switch-button.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SwitchButtonModule   
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
