import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotaComponent } from './dota.component';

describe('DotaComponent', () => {
  let component: DotaComponent;
  let fixture: ComponentFixture<DotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
