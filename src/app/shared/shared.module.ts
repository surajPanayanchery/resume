import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [...COMPONENTS,FontAwesomeModule]
})
export class SharedModule { }
