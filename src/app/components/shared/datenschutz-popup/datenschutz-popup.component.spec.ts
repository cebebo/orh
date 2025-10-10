import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzPopupComponent } from './datenschutz-popup.component';

describe('DatenschutzPopupComponent', () => {
  let component: DatenschutzPopupComponent;
  let fixture: ComponentFixture<DatenschutzPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenschutzPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatenschutzPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
