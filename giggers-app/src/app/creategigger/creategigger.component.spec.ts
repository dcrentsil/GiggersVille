import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategiggerComponent } from './creategigger.component';

describe('CreategiggerComponent', () => {
  let component: CreategiggerComponent;
  let fixture: ComponentFixture<CreategiggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreategiggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategiggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
