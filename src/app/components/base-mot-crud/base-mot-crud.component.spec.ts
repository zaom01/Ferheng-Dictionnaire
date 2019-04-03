import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMotCRUDComponent } from './base-mot-crud.component';

describe('BaseMotCRUDComponent', () => {
  let component: BaseMotCRUDComponent;
  let fixture: ComponentFixture<BaseMotCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMotCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMotCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
