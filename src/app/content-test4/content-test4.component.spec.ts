import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTest4Component } from './content-test4.component';

describe('ContentTest4Component', () => {
  let component: ContentTest4Component;
  let fixture: ComponentFixture<ContentTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTest4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
