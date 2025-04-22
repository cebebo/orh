import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngFreizeitenComponent } from './ang-freizeiten.component';

describe('AngFreizeitenComponent', () => {
  let component: AngFreizeitenComponent;
  let fixture: ComponentFixture<AngFreizeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngFreizeitenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngFreizeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
