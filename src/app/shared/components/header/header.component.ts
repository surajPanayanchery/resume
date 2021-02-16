import { Component, OnInit } from '@angular/core';
import { faProjectDiagram, faTasks, faUser } from '@fortawesome/free-solid-svg-icons';

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
