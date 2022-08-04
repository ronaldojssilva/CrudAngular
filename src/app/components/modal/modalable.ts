import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Component({
  template: ''
})
export default class Modalable{

  @ViewChild(ModalComponent)
  modalComponent!: ModalComponent;

  hide(){
    this.modalComponent.hide();
  }

  show(){
    this.modalComponent.show();
  }

}
