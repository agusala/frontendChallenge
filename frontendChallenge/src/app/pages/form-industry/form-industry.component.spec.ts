import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormIndustryComponent } from 'src/app/features/industry/components/form-industry/form-industry.component';


describe('FormRubroComponent', () => {
  let component: FormIndustryComponent;
  let fixture: ComponentFixture<FormIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormIndustryComponent]
    });
    fixture = TestBed.createComponent(FormIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});