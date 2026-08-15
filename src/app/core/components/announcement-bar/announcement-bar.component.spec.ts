import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementBarComponent } from './announcement-bar.component';

describe('AnnouncementBarComponent', () => {
  let component: AnnouncementBarComponent;
  let fixture: ComponentFixture<AnnouncementBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnouncementBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
