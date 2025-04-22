import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsBilderComponent } from './fs-bilder.component';

describe('FsBilderComponent', () => {
  let component: FsBilderComponent;
  let fixture: ComponentFixture<FsBilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsBilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsBilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
