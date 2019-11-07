import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolPlayerComponent } from './lol-player.component';

describe('LolPlayerComponent', () => {
  let component: LolPlayerComponent;
  let fixture: ComponentFixture<LolPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
