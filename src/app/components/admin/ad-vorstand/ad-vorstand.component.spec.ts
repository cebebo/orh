import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdVorstandComponent } from './ad-vorstand.component';

describe('AdVorstandComponent', () => {
  let component: AdVorstandComponent;
  let fixture: ComponentFixture<AdVorstandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdVorstandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdVorstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
