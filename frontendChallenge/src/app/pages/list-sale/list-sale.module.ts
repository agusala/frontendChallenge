import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleModule } from 'src/app/features/sale/sale.module';
import { ListSalePage } from './list-sale.component';


@NgModule({
  declarations: [
    ListSalePage
  ],
  imports: [
    CommonModule,
    SaleModule,
  ],
  exports: [
    ListSalePage
  ]
})
export class ListSaleModule {}