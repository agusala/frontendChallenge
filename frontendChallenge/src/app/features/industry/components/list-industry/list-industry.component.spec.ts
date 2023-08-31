import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndustryComponent } from './list-industry.component';

describe('ListRubroComponent', () => {
  let component: ListIndustryComponent;
  let fixture: ComponentFixture<ListIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListIndustryComponent]
    });
    fixture = TestBed.createComponent(ListIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});