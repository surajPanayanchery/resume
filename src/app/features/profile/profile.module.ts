import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PROFILE_COMPONENTS } from './components';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfessionComponent } from './components/profession/profession.component';



@NgModule({
  declarations: [PROFILE_COMPONENTS],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
