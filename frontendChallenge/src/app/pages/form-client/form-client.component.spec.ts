import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientPage } from './form-client.component';

describe('FormClientComponent', () => {
  let component: FormClientPage;
  let fixture: ComponentFixture<FormClientPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientPage]
    });
    fixture = TestBed.createComponent(FormClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});