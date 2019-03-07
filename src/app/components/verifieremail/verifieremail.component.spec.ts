import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifieremailComponent } from './verifieremail.component';

describe('VerifieremailComponent', () => {
  let component: VerifieremailComponent;
  let fixture: ComponentFixture<VerifieremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifieremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifieremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
