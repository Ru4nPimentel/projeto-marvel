import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hqs',
  templateUrl: './hqs.component.html',
  styleUrls: ['./hqs.component.scss']
})
export class HqsComponent implements OnInit {

  @Input() id = '';
  @Input() title = '';
  @Input() description = '';
  @Input() saibaMais = '';
  @Input() url = '';
  @Input() imgExt = '';

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('hqsDescription') hqsDescription:ElementRef ;

  clickDescription(){
    this.hqsDescription.nativeElement.classList.toggle('ativo');
  }

}
