import { Component, Input } from '@angular/core';
import {
  BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardGroupComponent,
  CardHeaderComponent,
  CardImgDirective,
  CardLinkDirective,
  CardSubtitleDirective,
  CardTextDirective,
  CardTitleDirective,
  ColComponent,
  GutterDirective,
  ListGroupDirective,
  ListGroupItemDirective,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-event-card',
  imports: [
    BorderDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    CardGroupComponent,
    CardHeaderComponent,
    CardImgDirective,
    CardLinkDirective,
    CardSubtitleDirective,
    CardTextDirective,
    CardTitleDirective,
    ColComponent,
    GutterDirective,
    ListGroupDirective,
    ListGroupItemDirective,
    RowComponent,
    TabDirective,
    TabPanelComponent,
    TabsComponent,
    TabsContentComponent,
    TabsListComponent,
  ],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event: any = {
    title: '',
    category: '',
    description: '',
    flyer:
      'http://localhost:5076/Resources/8245b9c2-3c51-4e76-bdf1-4093841dd9ac.png',
  };
}
