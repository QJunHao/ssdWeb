import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaPlayerComponent } from './dota-player.component';

describe('DotaPlayerComponent', () => {
  let component: DotaPlayerComponent;
  let fixture: ComponentFixture<DotaPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
