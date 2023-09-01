import { Component, Input, OnInit } from '@angular/core';
import { Sale } from '../../models/sale';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/features/product/services/product.service';
import { SaleService } from '../../services/sale.service';
import { ClientService } from 'src/app/features/client/services/client.service';

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
  styleUrls: ['./form-sale.component.css']
})
export class FormSaleComponent implements OnInit {
  public formSale!:FormGroup  ;
  public sale!: Sale;
  public buttonLabel = 'Crear Venta';
  public products:any = [];
  public clients:any = [];
public items:any = [];
  @Input() item!: Sale;
  constructor(
    public saleService:SaleService,
    public productService:ProductService,
    public clientService:ClientService
  ) {
    this.sale = new Sale( new Date, '', '', '')
    this.formSale = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      client_id: new FormControl('', [Validators.required]),
      importe_total: new FormControl('',),
      observaciones: new FormControl('', ),

     });
  }

  ngOnInit(): void {
    const datalistOptions = document.getElementById('datalistOptions');
    if (datalistOptions) {
      datalistOptions.addEventListener('click', (event) => this.addItem(event));
    }
    this.productService.getProducts().subscribe((res:any)=>{
      this.products=res;
console.log(this.products)

    })

    this.clientService.getClients().subscribe((res:any)=>{
      this.clients=res;
      console.log(this.clients)
  })
     if ( this.item&& this.item.id != '') {
      this.formSale.setValue({
        fecha: this.item.fecha,
        client_id: this.item.client_id,
        importe_total: this.item.importe_total,
        observaciones: this.item.observaciones,

      });

  }
  }

  onSubmit() {

    if (this.formSale.valid) {
      this.sale.fecha = this.formSale.controls['nombre'].value;
      this.sale.client_id = this.formSale.controls['client_id'].value;
      this.sale.importe_total = this.formSale.controls['importe_total'].value;
      this.sale.observaciones = this.formSale.controls['observaciones'].value;

      this.saleService.createSale(this.sale).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }
  }


  addItem(event: Event) {


    const clickedElement = event.target as HTMLElement;

    console.log(clickedElement)
  // Retrieve the value of the clicked option
  const selectedValue = clickedElement.getAttribute('value');

  // Do something with the selectedValue
  console.log('Selected value:', selectedValue);
}
}