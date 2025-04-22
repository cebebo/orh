import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHeroComponent } from './ang-hero.component';

describe('AngHeroComponent', () => {
  let component: AngHeroComponent;
  let fixture: ComponentFixture<AngHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
