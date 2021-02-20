import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { COMPS } from './components';
import { ProjectsRoutingModule } from './projects-routing.module';



@NgModule({
  declarations: [COMPS],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
