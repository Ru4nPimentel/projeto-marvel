import { NgModule } from '@angular/core';
import { ComicsComponent } from './comics.component';
import { HqsComponent } from './hqs/hqs.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:[
    ComicsComponent,HqsComponent
  ],
  exports:[
    ComicsComponent
  ],
  imports:[HttpClientModule, CommonModule]
})
export class ComicsModule{

}
