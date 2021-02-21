import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todolist: string[] = ['Drag to Complete'];
  todo: string = '';
  completed: string[] = [];
  addIcon = faPlusCircle;
  removeIcon = faMinusCircle;
  submitIcon = faCheckCircle;
  rightIcon = faAngleRight;
  leftIcon = faAngleLeft;
  showInput = false;

  constructor() {}

  ngOnInit(): void {}

  addToComplete(value: string) {
    this.todolist.splice(this.todolist.indexOf(value), 1);
    this.completed.push(value);
  }

  addToTodo(value: string) {
    this.completed.splice(this.completed.indexOf(value), 1);
    this.todolist.push(value);
  }

  addTodo() {
    this.todolist.push(this.todo);
    this.showInput = false;
    this.todo = '';
  }

  removeTodo(index: number) {
    this.todolist.splice(index, 1);
  }
  removeCompleted(index: number) {
    this.completed.splice(index, 1);
  }
}
