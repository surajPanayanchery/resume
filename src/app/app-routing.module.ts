import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  { path: 'resume', loadChildren: () => import('./features/profile').then(mod => mod.ProfileModule) },
  { path: 'profile', loadChildren: () => import('./features/profile').then(mod => mod.ProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
