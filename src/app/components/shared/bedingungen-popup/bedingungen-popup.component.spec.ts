import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedingungenPopupComponent } from './bedingungen-popup.component';

describe('BedingungenPopupComponent', () => {
  let component: BedingungenPopupComponent;
  let fixture: ComponentFixture<BedingungenPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedingungenPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedingungenPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
