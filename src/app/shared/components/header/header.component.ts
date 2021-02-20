import { Component, OnInit } from '@angular/core';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userIcon = faUser;
  projectsIcon = faTasks;
  arrowDown = faCaretDown;
  arrowUp = faCaretUp;
  counter = faBalanceScale;
  constructor() {}

  ngOnInit(): void {}
}
