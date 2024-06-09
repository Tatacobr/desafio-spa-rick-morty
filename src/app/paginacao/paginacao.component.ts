import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent {

  @Output() pageChanged = new EventEmitter<string>();
  @Input() pages?: number = 1;
  @Input() next?: string = "null";
  @Input() prev?: string = "null";
  
  public nextPage(){
    this.pageChanged.emit(this.next);
  }

  public prevPage(){
    this.pageChanged.emit(this.prev);
  }

}
