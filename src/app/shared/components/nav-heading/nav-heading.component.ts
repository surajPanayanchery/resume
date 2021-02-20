import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-heading',
  templateUrl: './nav-heading.component.html',
  styleUrls: ['./nav-heading.component.scss'],
})
export class NavHeadingComponent implements OnInit {
  @Input() heading: string = 'Heading';
  iconBack = faArrowLeft;
  @Input() route: string;
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  navigateBack() {
    if (this.route) {
      this.router.navigate([this.route]);
    } else {
      this.location.back();
    }
  }
}
