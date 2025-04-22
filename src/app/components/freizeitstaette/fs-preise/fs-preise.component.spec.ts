import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsPreiseComponent } from './fs-preise.component';

describe('FsPreiseComponent', () => {
  let component: FsPreiseComponent;
  let fixture: ComponentFixture<FsPreiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsPreiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsPreiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
