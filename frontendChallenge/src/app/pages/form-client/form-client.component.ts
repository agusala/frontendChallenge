import { Component } from '@angular/core';
import { FormClientComponent } from 'src/app/features/client/components/form-client/form-client.component';

@Component({
  selector: 'app-form-client-page',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientPage{
  modalService: any;
  
  openModal() {
    const modalRef = this.modalService.open(FormClientComponent); // Abre el modal con el componente
  }
  showNavBar: boolean = true;

}