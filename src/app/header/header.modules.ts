import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  declarations:[
    HeaderComponent,
    LogoComponent
  ],
  imports:[
    RouterModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModules{

}
