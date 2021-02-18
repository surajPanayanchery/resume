import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faTasks } from '@fortawesome/free-solid-svg-icons/faTasks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIcon = faUser;
  projectsIcon = faTasks;

  constructor() { }

  ngOnInit(): void {
  }

}
