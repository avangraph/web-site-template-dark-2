import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cover2Component } from './cover2.component';

describe('Cover2Component', () => {
  let component: Cover2Component;
  let fixture: ComponentFixture<Cover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cover2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
