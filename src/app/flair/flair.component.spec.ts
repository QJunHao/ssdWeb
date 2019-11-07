import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlairComponent } from './flair.component';

describe('FlairComponent', () => {
  let component: FlairComponent;
  let fixture: ComponentFixture<FlairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
