import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientPage } from './list-client.component';
import { ClientModule } from 'src/app/features/client/client.module';


@NgModule({
  declarations: [
    ListClientPage
  ],
  imports: [
    CommonModule,
    ClientModule,
  ],
  exports: [
    ListClientPage
  ]
})
export class ListClientModule {}