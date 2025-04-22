import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KtFormularComponent } from './kt-formular.component';

describe('KtFormularComponent', () => {
  let component: KtFormularComponent;
  let fixture: ComponentFixture<KtFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KtFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KtFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
