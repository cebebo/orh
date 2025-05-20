import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPreiseComponent } from './ad-preise.component';

describe('AdPreiseComponent', () => {
  let component: AdPreiseComponent;
  let fixture: ComponentFixture<AdPreiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdPreiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdPreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
