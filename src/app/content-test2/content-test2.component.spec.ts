import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTest2Component } from './content-test2.component';

describe('ContentTest2Component', () => {
  let component: ContentTest2Component;
  let fixture: ComponentFixture<ContentTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
