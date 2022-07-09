import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropResumeComponent } from './drop-resume.component';

describe('DropResumeComponent', () => {
  let component: DropResumeComponent;
  let fixture: ComponentFixture<DropResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
