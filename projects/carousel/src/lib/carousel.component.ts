import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('400ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  @Input() private config;

  currentSlide = 0;
  showButton: boolean;
  showArrow: boolean;
  
  constructor() {
  }

  ngOnInit() {
    this.preloadImages();
    this.getControls();
  }

  getControls() {
    this.showButton = this.config.btn.visible;
    this.showArrow = this.config.arrow.visible;
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.image;
    }
  }

}
