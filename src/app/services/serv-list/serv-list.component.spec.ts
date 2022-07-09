import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServListComponent } from './serv-list.component';

describe('ServListComponent', () => {
  let component: ServListComponent;
  let fixture: ComponentFixture<ServListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
