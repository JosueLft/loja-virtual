import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './servicos/carrinho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  get quantidade() {
    return this.carrinhoService.quantidade;
  }

  get itens() {
    return this.carrinhoService.itens;
  }

}