import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientPage } from './form-client.component';
import { ClientModule } from 'src/app/features/client/client.module';



@NgModule({
  declarations: [
    FormClientPage
  ],
  imports: [
    CommonModule,
    ClientModule
  ]
})
export class FormClientModule { }