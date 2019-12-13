import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbugComponent } from './viewbug.component';

describe('ViewbugComponent', () => {
  let component: ViewbugComponent;
  let fixture: ComponentFixture<ViewbugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
