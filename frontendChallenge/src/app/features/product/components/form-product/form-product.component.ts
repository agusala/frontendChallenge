import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IndustryService } from 'src/app/features/industry/services/industry.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit{
  public formProduct!:FormGroup  ;
  public product!: Product;
  public isEditing: boolean = false;
  public isSubmited: boolean = false;
  public buttonLabel = 'Crear producto';
  public rubros:any = [];

  @Input() item!: Product;
  constructor(
    public productService:ProductService,
    public industryService:IndustryService) {
    this.product = new Product('', '', '', '', '')
    this.formProduct = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
      precio: new FormControl('',),
      rubro: new FormControl('', ),

     });
  }

  ngOnInit(): void {

    this.industryService.getIndustrys().subscribe((res:any)=>{
      this.rubros=res;
      console.log(this.rubros)

    })

     if (this.item && this.item.id != '') {
      this.isEditing = true;
      this.buttonLabel = 'Guardar';
      this.formProduct.setValue({
        nombre: this.item.nombre,
        codigo: this.item.codigo,
        precio: this.item.precio,
        rubro: this.item.rubro_id,

      });
    } else {
      this.isEditing = false;
    }
  }


  onSubmit() {
    this.isSubmited = true;
    if (this.formProduct.valid) {
      this.product.nombre = this.formProduct.controls['nombre'].value;
      this.product.codigo = this.formProduct.controls['codigo'].value;
      this.product.precio = this.formProduct.controls['precio'].value;
      this.product.rubro_id = this.formProduct.controls['rubro'].value;

      this.save();
    }
  }

  createProduct() {
      this.productService.createProduct(this.product).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }



  save() {
    if (this.isEditing) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }
  updateProduct() {
    this.product.id = this.item.id;
    this.productService.editProduct(this.item.id,this.product).subscribe({
      next: (data:any) => {
        console.log(data)
      },
    });
}
}