import { NgModule } from "@angular/core";
import { FormProductPage } from "./form-product.component";
import { ProductModule } from "src/app/features/product/product.module";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    FormProductPage
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class FormProductModule { }