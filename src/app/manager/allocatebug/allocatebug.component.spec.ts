import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatebugComponent } from './allocatebug.component';

describe('AllocatebugComponent', () => {
  let component: AllocatebugComponent;
  let fixture: ComponentFixture<AllocatebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
