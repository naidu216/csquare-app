import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabosquareComponent } from './labosquare.component';

describe('LabosquareComponent', () => {
  let component: LabosquareComponent;
  let fixture: ComponentFixture<LabosquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabosquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabosquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
