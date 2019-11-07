import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolMatchesComponent } from './lol-matches.component';

describe('LolMatchesComponent', () => {
  let component: LolMatchesComponent;
  let fixture: ComponentFixture<LolMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
