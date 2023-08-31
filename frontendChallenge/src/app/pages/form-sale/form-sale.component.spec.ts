import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSaleComponent } from 'src/app/features/sale/components/form-sale/form-sale.component';


describe('FormSaleComponent', () => {
  let component: FormSaleComponent;
  let fixture: ComponentFixture<FormSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSaleComponent]
    });
    fixture = TestBed.createComponent(FormSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});