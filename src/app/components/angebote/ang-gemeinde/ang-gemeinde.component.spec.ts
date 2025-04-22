import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngGemeindeComponent } from './ang-gemeinde.component';

describe('AngGemeindeComponent', () => {
  let component: AngGemeindeComponent;
  let fixture: ComponentFixture<AngGemeindeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngGemeindeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngGemeindeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
