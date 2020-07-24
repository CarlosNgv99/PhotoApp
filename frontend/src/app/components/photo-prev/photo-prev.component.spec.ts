import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPrevComponent } from './photo-prev.component';

describe('PhotoPrevComponent', () => {
  let component: PhotoPrevComponent;
  let fixture: ComponentFixture<PhotoPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
