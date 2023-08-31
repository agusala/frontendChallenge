import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})

export class FormClientComponent implements OnInit{
    public formClient!:FormGroup  ;
    public client: Client;
    public isEditing: boolean = false;
    public isSubmited: boolean = false;
    public buttonLabel = 'Crear Cliente';


    @Input() item!: Client;
    constructor(
      public clientService:ClientService
    ) {
      this.client = new Client('', '', '', '', '')
      this.formClient = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        cuit: new FormControl('', [Validators.required]),
        email: new FormControl('',),
        domicilio: new FormControl('', ),
        telefono: new FormControl('', ),

       });
    }

    ngOnInit(): void {

       if (this.item && this.item.id != '') {
        this.isEditing = true;
        this.buttonLabel = 'Guardar';
        this.formClient.setValue({
          nombre: this.item.nombre,
          domicilio: this.item.domicilio,
          email: this.item.email,
          telefono: this.item.telefono,
          cuit: this.item.cuit,
        });
      } else {
        this.isEditing = false;
      }
    }


    onSubmit() {
      this.isSubmited = true;
      if (this.formClient.valid) {
        this.client.nombre = this.formClient.controls['nombre'].value;
        this.client.domicilio = this.formClient.controls['domicilio'].value;
        this.client.email = this.formClient.controls['email'].value;
        this.client.telefono = this.formClient.controls['telefono'].value;
        this.client.cuit = this.formClient.controls['cuit'].value;
        this.save();
      }
    }

    createClient() {
        this.clientService.createClient(this.client).subscribe(
          (data:any) => {
            console.log(data);
          }
        )
      }



    save() {
      if (this.isEditing) {
        this.updateProfileClient();
      } else {
        this.createClient();
      }
    }
    updateProfileClient() {
      this.client.id = this.item.id;
      this.clientService.editClient(this.item.id,this.client).subscribe({
        next: (data) => {
          console.log(data)
        },
      });
}
}