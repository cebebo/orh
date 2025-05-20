import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNewstickerComponent } from './ad-newsticker.component';

describe('AdNewstickerComponent', () => {
  let component: AdNewstickerComponent;
  let fixture: ComponentFixture<AdNewstickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdNewstickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdNewstickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
