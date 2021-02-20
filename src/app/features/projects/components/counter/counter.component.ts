import { Component, OnInit } from '@angular/core';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count = 0;
  addIcon = faPlus;
  minusIcon = faMinus;
  resetIcon = faRedoAlt;
  constructor() {}

  ngOnInit(): void {}

  add() {
    this.count++;
  }

  minus() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
