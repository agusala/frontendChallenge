import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modal: NgbModal) {}

  openModal(component: any,item?:Object) {
    const modalRef = this.modal.open(component);

    if (item && modalRef.componentInstance) {
      modalRef.componentInstance.item = item;
    }
  }

  closeModal() {
    this.modal.dismissAll();
  }

}