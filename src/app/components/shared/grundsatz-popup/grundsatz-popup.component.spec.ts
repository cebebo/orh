import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrundsatzPopupComponent } from './grundsatz-popup.component';

describe('GrundsatzPopupComponent', () => {
  let component: GrundsatzPopupComponent;
  let fixture: ComponentFixture<GrundsatzPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrundsatzPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrundsatzPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
