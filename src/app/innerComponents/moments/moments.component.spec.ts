import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsComponent } from './moments.component';

describe('MomentsComponent', () => {
  let component: MomentsComponent;
  let fixture: ComponentFixture<MomentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
