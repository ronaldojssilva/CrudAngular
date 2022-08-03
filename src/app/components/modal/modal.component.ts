import { Component, ElementRef, OnInit } from '@angular/core';

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

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
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
