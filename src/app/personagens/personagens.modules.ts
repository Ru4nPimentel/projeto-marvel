import { NgModule } from '@angular/core';

import { PersonagemComponent } from './personagem/personagem.component';
import { ListaPersonagemComponent } from './lista-personagem/lista-personagem.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule(
  {
    declarations:[
      PersonagemComponent,ListaPersonagemComponent
    ],
    exports:[
      PersonagemComponent, ListaPersonagemComponent
    ],
    imports:[HttpClientModule, CommonModule]
  })
export class PersonagensModules{}
