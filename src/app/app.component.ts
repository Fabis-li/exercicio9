import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/assets/exercicio09';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, Produto{
  valorTotal: number = 0;
  nome:string = "";
  valor: number = 0;
  codigo: number=0;
  quantidade: number=0;
  emEstoque: boolean= true;
  sofa: Produto = {
    nome: "Sofá 4 lugares",
    valor: 120,
    codigo: 1,
    quantidade: 30,
    emEstoque: true
  };


constructor(){}

ngOnInit(){
  this.comprar(this.sofa,30);
  this.comprar(this.sofa, 10);
}
 comprar(produto:Produto, quantidade: number): void{
   if(produto.emEstoque == true){
     this.valorTotal = produto.valor * quantidade;
     debugger;
     produto.quantidade += quantidade
   }
 }
}
