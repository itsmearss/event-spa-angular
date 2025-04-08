import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'app-hero',
  imports: [
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    RouterLink,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/images/event-ui-hero.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/event-ui-hero.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: './assets/images/event-ui-hero.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
  }
}
