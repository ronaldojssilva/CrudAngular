import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

declare const $: any;

@Component({
  selector: 'modal',
  template: `
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- essa tag ng-content é usada para permitir transportar um conteúdo para ca. -->
          <div class="modal-header">
            <ng-content select="[modal-title]"></ng-content>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ng-content select="[modal-body]"></ng-content>
          <ng-content select="[modal-footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const nativeElemet: HTMLElement = this.element.nativeElement;
    nativeElemet.querySelector('[modal-title]')?.classList.add('modal-title');
    nativeElemet.querySelector('[modal-body]')?.classList.add('modal-body');
    nativeElemet.querySelector('[modal-footer]')?.classList.add('modal-footer');

    // https://getbootstrap.com/docs/5.2/components/modal/#events
    //e:any são as informações do evento que ocorreu.
    $(this.divModal).on('hidden.bs.modal', (e: any) => {
      //console.log('escondido', e);
      this.onHide.emit(e);
    })
    $(this.divModal).on('shown.bs.modal', (e: any) => {
      //console.log('mostrado', e);
      this.onShow.emit(e);
    })
  }

  hide(){
    $(this.divModal).modal('hide');
  }

  show(){
    $(this.divModal).modal('show');
  }

  private get divModal(): HTMLElement{
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
