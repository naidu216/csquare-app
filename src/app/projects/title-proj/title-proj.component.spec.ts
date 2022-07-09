import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProjComponent } from './title-proj.component';

describe('TitleProjComponent', () => {
  let component: TitleProjComponent;
  let fixture: ComponentFixture<TitleProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
