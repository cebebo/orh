import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHeroComponent } from './ad-hero.component';

describe('AdHeroComponent', () => {
  let component: AdHeroComponent;
  let fixture: ComponentFixture<AdHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
