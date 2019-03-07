import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDepasseOublierComponent } from './mot-depasse-oublier.component';

describe('MotDepasseOublierComponent', () => {
  let component: MotDepasseOublierComponent;
  let fixture: ComponentFixture<MotDepasseOublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotDepasseOublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotDepasseOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
