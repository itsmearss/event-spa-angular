import { Component } from '@angular/core';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from './component/hero/hero.component';
import { TestimoniComponent } from './component/testimoni/testimoni.component';
import { PastEventComponent } from './component/past-event/past-event.component';
import { UpcomingEventComponent } from './component/upcoming-event/upcoming-event.component';
import { ContainerComponent } from '@coreui/angular';
@Component({
  selector: 'app-landing-page',
  imports: [
    FooterComponent,
    NavbarComponent,
    HeroComponent,
    TestimoniComponent,
    PastEventComponent,
    UpcomingEventComponent,
    ContainerComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
