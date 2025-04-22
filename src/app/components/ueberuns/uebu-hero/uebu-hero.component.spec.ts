import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebuHeroComponent } from './uebu-hero.component';

describe('UebuHeroComponent', () => {
  let component: UebuHeroComponent;
  let fixture: ComponentFixture<UebuHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UebuHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UebuHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
