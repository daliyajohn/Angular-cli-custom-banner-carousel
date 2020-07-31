import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    BrowserModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }
