import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorelinesMapComponent } from './shorelines-map.component';

describe('ShorelinesMapComponent', () => {
  let component: ShorelinesMapComponent;
  let fixture: ComponentFixture<ShorelinesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorelinesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorelinesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
