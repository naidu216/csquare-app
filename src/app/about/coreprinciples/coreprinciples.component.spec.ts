import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreprinciplesComponent } from './coreprinciples.component';

describe('CoreprinciplesComponent', () => {
  let component: CoreprinciplesComponent;
  let fixture: ComponentFixture<CoreprinciplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreprinciplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreprinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
