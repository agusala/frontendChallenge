import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProductComponent } from 'src/app/features/product/components/form-product/form-product.component';


describe('FormProductComponent', () => {
  let component: FormProductComponent;
  let fixture: ComponentFixture<FormProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductComponent]
    });
    fixture = TestBed.createComponent(FormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});