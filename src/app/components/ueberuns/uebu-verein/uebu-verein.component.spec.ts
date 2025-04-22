import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebuVereinComponent } from './uebu-verein.component';

describe('UebuVereinComponent', () => {
  let component: UebuVereinComponent;
  let fixture: ComponentFixture<UebuVereinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UebuVereinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UebuVereinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
