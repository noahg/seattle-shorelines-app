import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorelineListComponent } from './shoreline-list.component';

describe('ShorelineListComponent', () => {
  let component: ShorelineListComponent;
  let fixture: ComponentFixture<ShorelineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorelineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
