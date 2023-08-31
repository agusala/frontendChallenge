import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIndustryPage } from './list-industry.component';
import { IndustryModule } from 'src/app/features/industry/industry.module';



@NgModule({
  declarations: [
    ListIndustryPage
  ],
  imports: [
    CommonModule,
    IndustryModule
  ]
})
export class ListIndustryModule { }