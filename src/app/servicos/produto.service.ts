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
      'Processador: Intel Core i3 10100, 3.6GHz (4.3GHz Max Turbo) 4-Core, 8-Threads, 6MB Cache, FCLGA1200',
      '-Gráficos integrados no processador: Sim',
      '-Intel UHD Graphics 630',
      '-Frequência: baseada em gráficos 350 MHz',
      '-Frequência dinâmica máxima de gráficos: 1.10 GHz',
      '-Memória gráfica de vídeo máximo de 64GB',
      '-Suporte 4K: 60Hz',
      '-Resolução máxima (HDMI 1.4): 4096x2160 @ 30Hz',
      '-Resolução máxima (DP): 4096x2304 a 60Hz',
      'Placa mãe: Asus Prime H410M-E/BR',
      '-Memória: 2 DIMM máximo 64GB DDR4 3200',
      '-PCIe 3.0 x16 (modo x16): 1',
      '-PCIe 3.0 x1: 2',
      'Memória: 16GB (2x 8GB) DDR4 2666 Adata Chipart',
      'HDD: 1TB, SATA3, 6.0Gb/s',
      'Placa de video PCIe AMD Radeon RX550 4GB',
      'Fonte de alimentação 500W Gamemax GM500, 80 Plus Bronze'
    ];
  }
}