import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtAnreiseComponent } from './kt-anreise.component';

describe('KtAnreiseComponent', () => {
  let component: KtAnreiseComponent;
  let fixture: ComponentFixture<KtAnreiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtAnreiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KtAnreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
