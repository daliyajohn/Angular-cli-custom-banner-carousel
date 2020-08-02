import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slides: any;
  constructor() {
    this.slides = [
      {
        'image' : 'https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-1452531737Jr0.jpg',
        'url': "url",
        'caption': 'caption'
      },
      {
        'image' : 'https://sweep.ac.uk/wp-content/uploads/yellow-banner.jpg',
        'url': "url",
        'caption': 'caption'
      },
      {
        'image' : 'https://inacomp.net/wp-content/uploads/2015/10/banner-blue-background.png',
        'url': "url",
        'caption': 'caption'
      }
    ];
  }
}
