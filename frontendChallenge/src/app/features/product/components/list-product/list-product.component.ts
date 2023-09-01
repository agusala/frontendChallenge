import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { SessionService } from 'src/app/auth/session.service';
import { ListItemsComponent } from 'src/app/shared/components/list-items/list-items.component';
import { ModalService } from 'src/app/shared/service/modal.service';
import { ProductService } from '../../services/product.service';
import { FormProductComponent } from '../form-product/form-product.component';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  @ViewChild('listItem') listItems!: ListItemsComponent;
  public products:Array<Product>=[];
  public columns:Array<string>=['id','nombre','codigo','precio','rubro_id'];
  public titleTable:string='Productos';
  constructor(
   public productService:ProductService,
   public sessionService:SessionService,
   public modalService:ModalService

  ){}

    ngOnInit():void{
      this.refresh()
    }
    refresh(){
      this.productService.getProducts().subscribe((res:any)=>{
        this.products=res;
        console.log(this.products)

      })
    }

    editProduct(product:Product){
  this.modalService.openModal(FormProductComponent,product)

    }
    deleteProduct(product:Product){
      if(product.id)
      this.productService.deleteProduct(product.id).subscribe((res:any)=>{
        console.log(res)
        this.refresh()
      })

    }
}