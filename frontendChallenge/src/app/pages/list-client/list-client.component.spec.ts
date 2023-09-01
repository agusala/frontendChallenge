import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListClientComponent } from 'src/app/features/client/components/list-client/list-client.component';


describe('ListClientComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListClientComponent]
    });
    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});