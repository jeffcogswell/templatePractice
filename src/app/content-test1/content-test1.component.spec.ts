import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTest1Component } from './content-test1.component';

describe('ContentTest1Component', () => {
  let component: ContentTest1Component;
  let fixture: ComponentFixture<ContentTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
