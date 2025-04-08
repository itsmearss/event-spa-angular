import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventPageComponent } from './upcoming-event-page.component';

describe('UpcomingEventPageComponent', () => {
  let component: UpcomingEventPageComponent;
  let fixture: ComponentFixture<UpcomingEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingEventPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
