import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiageColorComponent } from './miage-color.component';

describe('MiageColorComponent', () => {
  let component: MiageColorComponent;
  let fixture: ComponentFixture<MiageColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiageColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiageColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
