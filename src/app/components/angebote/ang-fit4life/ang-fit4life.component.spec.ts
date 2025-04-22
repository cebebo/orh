import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngFit4lifeComponent } from './ang-fit4life.component';

describe('AngFit4lifeComponent', () => {
  let component: AngFit4lifeComponent;
  let fixture: ComponentFixture<AngFit4lifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngFit4lifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngFit4lifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
