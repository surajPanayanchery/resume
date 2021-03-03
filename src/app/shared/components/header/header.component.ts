import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons/faBalanceScale';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons/faCaretUp';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
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
  home = faHome;
  work = faBriefcase;
  education = faGraduationCap;
  snippets = faCode


  constructor() {}

  ngOnInit(): void {}
}
