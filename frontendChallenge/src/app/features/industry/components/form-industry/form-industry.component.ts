import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Industry } from '../../models/industry';
import { IndustryService } from '../../services/industry.service';

@Component({
  selector: 'app-form-industry',
  templateUrl: './form-industry.component.html',
  styleUrls: ['./form-industry.component.css']
})
export class FormIndustryComponent implements OnInit {
  public formIndustry!:FormGroup  ;
  public rubro: Industry;
  public isEditing: boolean = false;
  public isSubmited: boolean = false;
  public buttonLabel = 'Crear Industry';


  @Input() item!: Industry;
  constructor(
    public rubroService:IndustryService ) {
    this.rubro = new Industry('', '', '')
    this.formIndustry = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
     });
  }

  ngOnInit(): void {

     if (this.item && this.item.id != '') {
      this.isEditing = true;
      this.buttonLabel = 'Guardar';
      this.formIndustry.setValue({
        nombre: this.item.nombre,
        codigo: this.item.codigo,
      });
    } else {
      this.isEditing = false;
    }
  }


  onSubmit() {
    this.isSubmited = true;
    if (this.formIndustry.valid) {
      this.rubro.nombre = this.formIndustry.controls['nombre'].value;
      this.rubro.codigo = this.formIndustry.controls['codigo'].value;
      this.save();
    }
  }

  createRubro() {
      this.rubroService.createIndustry(this.rubro).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }



  save() {
    if (this.isEditing) {
      this.updateIndustry();
    } else {
      this.createIndustry();
    }
  }
  createIndustry() {
    throw new Error('Method not implemented.');
  }
  updateIndustry() {
    this.rubro.id = this.item.id;
    this.rubroService.editIndustry(this.item.id,this.rubro).subscribe({
      next: (data: any) => {
        console.log(data)
      },
    });
}
}