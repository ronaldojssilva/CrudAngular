import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Component({
  template: ''
})
export class Modalable implements AfterViewInit {

  @ViewChild(ModalComponent)
  modalComponent!: ModalComponent;

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  //isso não funciona na versão 14 por isso usei o ngAfterViewInit, o this.modalComponent ainda não esta disponivel aqui.
  // ngOnInit():void {
  //   console.log(this.modalComponent);
  //   this.modalComponent.onHide.subscribe(event => {
  //     console.log(event);
  //     this.onHide.emit(event);
  //   });

  //   this.modalComponent.onHide.subscribe(event => {
  //     console.log(event);
  //     this.onShow.emit(event);
  //   });

  // }


  ngAfterViewInit():void {
    console.log(this.modalComponent);
    this.modalComponent.onHide.subscribe(event => {
      console.log(event);
      this.onHide.emit(event);
    });

    this.modalComponent.onShow.subscribe(event => {
      console.log(event);
      this.onShow.emit(event);
    });

  }


  hide(){
    this.modalComponent.hide();
  }

  show(){
    this.modalComponent.show();
  }

}
