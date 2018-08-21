import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2 } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent2;
  let fixture: ComponentFixture<TestComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
