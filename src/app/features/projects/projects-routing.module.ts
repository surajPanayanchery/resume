import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent, TodolistComponent } from './components';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'todolist', component: TodolistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
