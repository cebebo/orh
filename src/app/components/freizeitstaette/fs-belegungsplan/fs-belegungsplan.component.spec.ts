import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsBelegungsplanComponent } from './fs-belegungsplan.component';

describe('FsBelegungsplanComponent', () => {
  let component: FsBelegungsplanComponent;
  let fixture: ComponentFixture<FsBelegungsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsBelegungsplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsBelegungsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
