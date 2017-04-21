import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorelineDetailsComponent } from './shoreline-details.component';

describe('ShorelineDetailsComponent', () => {
  let component: ShorelineDetailsComponent;
  let fixture: ComponentFixture<ShorelineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorelineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorelineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
