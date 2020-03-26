import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonagemComponent } from './lista-personagem.component';

describe('ListaPersonagemComponent', () => {
  let component: ListaPersonagemComponent;
  let fixture: ComponentFixture<ListaPersonagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPersonagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
