import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebuReferentComponent } from './uebu-referent.component';

describe('UebuReferentComponent', () => {
  let component: UebuReferentComponent;
  let fixture: ComponentFixture<UebuReferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UebuReferentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UebuReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
