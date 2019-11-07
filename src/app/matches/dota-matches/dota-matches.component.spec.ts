import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaMatchesComponent } from './dota-matches.component';

describe('DotaMatchesComponent', () => {
  let component: DotaMatchesComponent;
  let fixture: ComponentFixture<DotaMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
