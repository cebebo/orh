import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtHeroComponent } from './kt-hero.component';

describe('KtHeroComponent', () => {
  let component: KtHeroComponent;
  let fixture: ComponentFixture<KtHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KtHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
