import { Component,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})

export class LogoComponent implements  AfterViewInit {

  @ViewChild('titleLogo') titleLogo:ElementRef;

  constructor() { }

  ngAfterViewInit(): void{
    const txtLogo = this.titleLogo.nativeElement;
    const txtArray = txtLogo.innerText.split('');
    txtLogo.innerText = '';
    txtArray.forEach((letra, index) => {
      setTimeout(function () {
        txtLogo.innerText += letra;
    }, 100 * index);
    });
  }



}
