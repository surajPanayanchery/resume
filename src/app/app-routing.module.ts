import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile').then((mod) => mod.ProfileModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects').then((mod) => mod.ProjectsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
