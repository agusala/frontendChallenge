import { Component, OnInit, ViewChild } from '@angular/core';
import { Industry } from '../../models/industry';
import { SessionService } from 'src/app/auth/session.service';
import { ModalService } from 'src/app/shared/service/modal.service';
import { IndustryService } from '../../services/industry.service';
import { ListItemsComponent } from 'src/app/shared/components/list-items/list-items.component';
import { FormIndustryComponent } from '../form-industry/form-industry.component';

@Component({
  selector: 'app-list-industry',
  templateUrl: './list-industry.component.html',
  styleUrls: ['./list-industry.component.css']
})
export class ListIndustryComponent implements OnInit{
deleteIndustry($event: Event) {
throw new Error('Method not implemented.');
}
editIndustry($event: Event) {
throw new Error('Method not implemented.');
}
  @ViewChild('listItem') listItems!: ListItemsComponent;
public industrys:Array<Industry>=[];
public columns:Array<string>=['id','nombre','codigo'];
public titleTable:string='Rubros';
constructor(
 public industryService:IndustryService,
 public sessionService:SessionService,
 public modalService:ModalService

){}

  ngOnInit():void{
    this.refresh()
  }
  refresh(){
    this.industryService.getIndustrys().subscribe((res:any)=>{
      this.industrys=res;
      console.log(this.industrys)

    })
  }

  editRubro(industry:Industry){
this.modalService.openModal(FormIndustryComponent,industry)

  }
  deleteRubro(industry:Industry){
    if(industry.id)
    this.industryService.deleteIndustry(industry.id).subscribe((res:any)=>{
      console.log(res)
      this.refresh()
    })

  }
}