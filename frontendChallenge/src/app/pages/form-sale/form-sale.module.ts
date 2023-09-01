import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleModule } from 'src/app/features/sale/sale.module';
import { FormSalePage } from './form-sale.component';




@NgModule({
  declarations: [
FormSalePage
  ],
  imports: [
    CommonModule,
    SaleModule
  ]
})
export class FormSaleModule { }