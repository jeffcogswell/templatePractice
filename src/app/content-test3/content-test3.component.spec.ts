import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTest3Component } from './content-test3.component';

describe('ContentTest3Component', () => {
  let component: ContentTest3Component;
  let fixture: ComponentFixture<ContentTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTest3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
