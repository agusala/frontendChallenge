import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormIndustryComponent } from './components/form-industry/form-industry.component';
import { ListIndustryComponent } from './components/list-industry/list-industry.component';



@NgModule({
  declarations: [
    FormIndustryComponent,
    ListIndustryComponent
  ],
  exports:[
    FormIndustryComponent,
    ListIndustryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ]
})
export class IndustryModule { }