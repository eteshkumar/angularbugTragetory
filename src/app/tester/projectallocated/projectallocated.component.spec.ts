import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectallocatedComponent } from './projectallocated.component';

describe('ProjectallocatedComponent', () => {
  let component: ProjectallocatedComponent;
  let fixture: ComponentFixture<ProjectallocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectallocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectallocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
