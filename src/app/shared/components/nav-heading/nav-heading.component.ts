import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowAltCircleLeft, faArrowLeft, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nav-heading',
  templateUrl: './nav-heading.component.html',
  styleUrls: ['./nav-heading.component.scss']
})
export class NavHeadingComponent implements OnInit {
  @Input() heading: string = "Heading";
  iconBack = faArrowLeft;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

}
