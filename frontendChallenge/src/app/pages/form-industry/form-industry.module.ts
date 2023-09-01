import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryModule } from 'src/app/features/industry/industry.module';
import { FormIndustryPage } from './form-industry.component';



@NgModule({
  declarations: [
    FormIndustryPage
  ],
  imports: [
    CommonModule,
    IndustryModule
  ]
})
export class FormIndustryModule { }