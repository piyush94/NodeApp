import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRestheartComponent } from './ngx-restheart.component';

describe('NgxRestheartComponent', () => {
  let component: NgxRestheartComponent;
  let fixture: ComponentFixture<NgxRestheartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRestheartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRestheartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
