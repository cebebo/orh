import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedingungenComponent } from './bedingungen.component';

describe('BedingungenComponent', () => {
  let component: BedingungenComponent;
  let fixture: ComponentFixture<BedingungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BedingungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BedingungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
