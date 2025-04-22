import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebuNamenComponent } from './uebu-namen.component';

describe('UebuNamenComponent', () => {
  let component: UebuNamenComponent;
  let fixture: ComponentFixture<UebuNamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UebuNamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UebuNamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
