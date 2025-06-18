import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPasswordComponent } from './ad-password.component';

describe('AdPasswordComponent', () => {
  let component: AdPasswordComponent;
  let fixture: ComponentFixture<AdPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
