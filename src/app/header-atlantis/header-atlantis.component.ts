import { Component, NgModule } from '@angular/core';
import {NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule],
  declarations: [],
  schemas: []
})

@Component({
  selector: 'app-header-atlantis',
  templateUrl: './header-atlantis.component.html',
	styleUrls: ['./header-atlantis.component.css'],
	providers: [NgbCarouselConfig]
})
export class HeaderAtlantisComponent {

  images = ["../../assets/imagenes/1.jpg", "../../assets/imagenes/2.jpg", "../../assets/imagenes/3.jpg"];

  constructor(config: NgbCarouselConfig) {
		config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
		config.pauseOnHover = false;
	 }

 
}

export class NgbdCarouselConfig {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}






