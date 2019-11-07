import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPollComponent } from './match-poll.component';

describe('MatchPollComponent', () => {
  let component: MatchPollComponent;
  let fixture: ComponentFixture<MatchPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
