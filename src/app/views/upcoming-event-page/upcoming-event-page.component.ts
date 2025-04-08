import { Component } from '@angular/core';
import { FooterComponent } from '../landing-page/component/footer/footer.component';
import { NavbarComponent } from '../landing-page/component/navbar/navbar.component';
import { HeroComponent } from '../landing-page/component/hero/hero.component';
import { TestimoniComponent } from '../landing-page/component/testimoni/testimoni.component';
import { PastEventComponent } from '../landing-page/component/past-event/past-event.component';
import { UpcomingEventComponent } from '../landing-page/component/upcoming-event/upcoming-event.component';
import { ContainerComponent } from '@coreui/angular';

@Component({
  selector: 'app-upcoming-event-page',
  imports: [
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    TestimoniComponent,
    PastEventComponent,
    UpcomingEventComponent,
    ContainerComponent,
  ],
  templateUrl: './upcoming-event-page.component.html',
  styleUrl: './upcoming-event-page.component.scss',
})
export class UpcomingEventPageComponent {}
