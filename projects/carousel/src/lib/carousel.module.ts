import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [CarouselComponent]
})
export class CarouselModule { }
