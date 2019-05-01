import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  public slideIndex: number = 1
  
  constructor() { }

  ngOnInit() {
  }

  lessSlides() {
    if (this.slideIndex == 3) {
      this.slideIndex = 1
    }
    else {
      this.slideIndex = this.slideIndex + 1;
    }
  }

  plusSlides() {
    if (this.slideIndex == 1) {
      this.slideIndex = 3
    }
    else {
      this.slideIndex = this.slideIndex - 1;
    }
  }

}
