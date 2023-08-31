import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input() titleTable:string='';
  // @Input('itemTemplate') itemTemplate!:TemplateRef<any>;
  @Input() HeadArray :Array<any>= [];
  @Input() GridArray :Array<any> = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  edit(item: any) {
console.log(item)
    this.onEdit.emit(item);
  }
  delete(item: any) {
console.log(item)
    this.onDelete.emit(item);
  }

}