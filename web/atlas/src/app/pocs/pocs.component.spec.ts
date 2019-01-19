import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocsComponent } from './pocs.component';

describe('PocsComponent', () => {
  let component: PocsComponent;
  let fixture: ComponentFixture<PocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
