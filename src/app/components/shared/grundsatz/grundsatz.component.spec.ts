import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrundsatzComponent } from './grundsatz.component';

describe('GrundsatzComponent', () => {
  let component: GrundsatzComponent;
  let fixture: ComponentFixture<GrundsatzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrundsatzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrundsatzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
