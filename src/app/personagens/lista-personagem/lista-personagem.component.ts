import { Component, Input, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-lista-personagem',
  templateUrl: './lista-personagem.component.html',
  styleUrls: ['./lista-personagem.component.scss']
})
export class ListaPersonagemComponent{

  @Input() id = '';
  @Input() name = '';
  @Input() descricao = '';
  @Input() url = '';
  @Input() imgExt = '';
  @Input() description = '';

  @ViewChild('heroDescription') heroDescription:ElementRef ;

  clickDescription(){
    this.heroDescription.nativeElement.classList.toggle('ativo');
  }

}
