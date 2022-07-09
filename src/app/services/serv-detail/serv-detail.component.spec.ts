import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDetailComponent } from './serv-detail.component';

describe('ServDetailComponent', () => {
  let component: ServDetailComponent;
  let fixture: ComponentFixture<ServDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
