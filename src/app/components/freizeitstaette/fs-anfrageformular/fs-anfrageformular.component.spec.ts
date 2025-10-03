import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsAnfrageformularComponent } from './fs-anfrageformular.component';

describe('FsAnfrageformularComponent', () => {
  let component: FsAnfrageformularComponent;
  let fixture: ComponentFixture<FsAnfrageformularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsAnfrageformularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsAnfrageformularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
