import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreizeitstaetteComponent } from './freizeitstaette.component';

describe('FreizeitstaetteComponent', () => {
  let component: FreizeitstaetteComponent;
  let fixture: ComponentFixture<FreizeitstaetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreizeitstaetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreizeitstaetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
