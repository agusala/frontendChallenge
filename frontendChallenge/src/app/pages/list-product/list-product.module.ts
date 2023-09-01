import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductPage } from './list-product.component';
import { ProductModule } from 'src/app/features/product/product.module';



@NgModule({
  declarations: [
    ListProductPage
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class ListProductModule { }