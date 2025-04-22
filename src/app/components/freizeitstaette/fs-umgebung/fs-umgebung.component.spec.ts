import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsUmgebungComponent } from './fs-umgebung.component';

describe('FsUmgebungComponent', () => {
  let component: FsUmgebungComponent;
  let fixture: ComponentFixture<FsUmgebungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsUmgebungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FsUmgebungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
