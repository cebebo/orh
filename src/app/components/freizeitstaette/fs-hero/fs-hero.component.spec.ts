import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsHeroComponent } from './fs-hero.component';

describe('FsHeroComponent', () => {
  let component: FsHeroComponent;
  let fixture: ComponentFixture<FsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
