import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFreizeitenComponent } from './ad-freizeiten.component';

describe('AdFreizeitenComponent', () => {
  let component: AdFreizeitenComponent;
  let fixture: ComponentFixture<AdFreizeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdFreizeitenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdFreizeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
