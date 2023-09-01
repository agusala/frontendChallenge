import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSaleComponent } from './list-sale.component';


describe('ListClientComponent', () => {
  let component: ListSaleComponent;
  let fixture: ComponentFixture<ListSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSaleComponent]
    });
    fixture = TestBed.createComponent(ListSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});