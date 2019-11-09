import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlairViewComponent } from './flair-view.component';

describe('FlairViewComponent', () => {
  let component: FlairViewComponent;
  let fixture: ComponentFixture<FlairViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlairViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlairViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
