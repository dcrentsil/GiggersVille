import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiggersComponent } from './giggers.component';

describe('GiggersComponent', () => {
  let component: GiggersComponent;
  let fixture: ComponentFixture<GiggersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiggersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
