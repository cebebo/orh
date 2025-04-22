import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsGrundrissComponent } from './fs-grundriss.component';

describe('FsGrundrissComponent', () => {
  let component: FsGrundrissComponent;
  let fixture: ComponentFixture<FsGrundrissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsGrundrissComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsGrundrissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
