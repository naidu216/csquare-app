import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleServComponent } from './title-serv.component';

describe('TitleServComponent', () => {
  let component: TitleServComponent;
  let fixture: ComponentFixture<TitleServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
