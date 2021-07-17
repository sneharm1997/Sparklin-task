import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {SwitchButtonComponent} from '../switch-button/switch-button.component';

@NgModule({
  declarations: [SwitchButtonComponent],
  imports: [
    CommonModule
   
  ],
  exports: [SwitchButtonComponent]
})
export class SwitchButtonModule { }
