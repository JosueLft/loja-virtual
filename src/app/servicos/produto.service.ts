import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [
    new Produto(
      1,
      "That Time I Got Reincarnated as a Slime Vol. 7",
      29.90,
      ["cover1.jpg"],
      this.getDescricao()
    ),
    new Produto(
      2,
      "Jujutsu Kaisen - Batalha de Feiticeiros Vol. 7",
      39.90,
      ["cover2.jpg"],
      this.getDescricao()
    ),
    new Produto(
      3,
      "Jujutsu Kaisen - Batalha De Feiticeiros Vol. 2",
      37.90,
      ["cover3.jpg"],
      this.getDescricao()
    ),
    new Produto(
      4,
      "Jujutsu Kaisen - Batalha De Feiticeiros Vol. 1",
      44.90,
      ["cover4.jpg"],
      this.getDescricao()
    ),
    new Produto(
      5,
      "Solo Leveling - Vol. 02",
      52.90,
      ["cover5.jpg"],
      this.getDescricao()
    ), new Produto(
      6,
      "Made in Abyss - Vol. 1",
      15.99,
      ["cover6.jpg"],
      this.getDescricao()
    )
  ];

  constructor() {}

  listarTodos(): Produto[] {
    return this.produtos;
  }

  listarId(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  private getDescricao(): string[] {
    return [
      "Um grande fenômeno um dia aconteceu, portais desconhecidos surgiram ligando o mundo que conhecemos a uma realidade totalmente extraordinária de monstros e seres fantasiosos, cujo único objetivo era matar humanos. Em resposta a esse novo perigo, surgiram os “caçadores”, humanos que foram “despertados” e ganharam poderes capazes de bater de frente com essas criaturas. Dentre eles, há um conhecido por ser “a pior arma da humanidade”, sung jin-woo. Mas sua sorte irá mudar quando uma incursão que deveria ser fácil se torna um verdadeiro pesadelo. A versão imprensa do famoso webtoon.",
      "Editora ‏ : ‎ NewPOP; 1ª edição(24 agosto 2020)",
      "Idioma ‏ : ‎ Português",
      "Capa comum ‏ : ‎ 300 páginas",
      "ISBN - 10 ‏ : ‎ 6586799201",
      "ISBN - 13 ‏ : ‎ 978 - 6586799200",
      "Dimensões ‏ : ‎ 21 x 14.8 x 1.4 cm",
      "Ranking dos mais vendidos: Nº 1, 146 em Livros"
    ];
  }
}