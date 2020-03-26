import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // faz com que o angular entenda que você quer criar todas
import { PersonagemComponent } from './personagens/personagem/personagem.component';
import { ComicsComponent } from './comics/comics.component';



//Adicionando resolver ele irá esperar resolver para mostra a rota

const routes: Routes = [
  {
    path: '', component: PersonagemComponent
  },
  {
    path: 'character/:characterPg', component: PersonagemComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'comics/:comicPg', component: ComicsComponent
  },
  {
    path: '**', component: PersonagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // importanto RouterModule e inserindo as rotas
  exports: [RouterModule]
})
export class AppRoutingModule{

}
