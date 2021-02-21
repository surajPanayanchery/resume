import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES],
  imports: [CommonModule, FormsModule, RouterModule, FontAwesomeModule],
  exports: [...COMPONENTS, FormsModule, DIRECTIVES, FontAwesomeModule],
})
export class SharedModule {}
