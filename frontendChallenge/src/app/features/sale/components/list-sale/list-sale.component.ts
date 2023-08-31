import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from 'src/app/auth/session.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/shared/service/modal.service';
import { Sale } from '../../models/sale';
import { SaleService } from '../../services/sale.service';
import { FormSaleComponent } from '../form-sale/form-sale.component';
import { ListItemsComponent } from 'src/app/shared/components/list-items/list-items.component';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit{
  @ViewChild('listItem') listItems!: ListItemsComponent;
public clients:Array<Sale>=[];
public columns:Array<string>=['client_id','fecha','importe_total','domicilio','observaciones'];
public titleTable:string='Sales';
    sales: any;
constructor(
 public saleService:SaleService,
 public sessionService:SessionService,
 public modalService:ModalService

){}

  ngOnInit():void{
    this.refresh()
  }
  refresh(){
    this.saleService.getSales().subscribe((res:any)=>{
      this.sales=res;
      console.log(this.sales)

    })
  }

  editSale(sale:Sale){
this.modalService.openModal(FormSaleComponent,sale)
    console.log(sale)
  }
  deleteSale(sale:Sale){
    if(sale.id)
    this.saleService.deleteSale(sale.id).subscribe((res:any)=>{
      console.log(res)
      this.refresh()
    })
    console.log(sale.id)
  }




  }