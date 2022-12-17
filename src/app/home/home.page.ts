import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public accountOptions : Array<any> =[
    { icon: "apps", text: "Área Pix"},
    { icon: "barcode", text: "Pagar"},
    { icon: "add-circle", text: "Pegar emprestado"},
    { icon: "arrow-down", text: "Transferir"},
    { icon: "arrow-up", text: "Depositar"},
    { icon: "phone-portrait", text: "Recarga de celular"},  
    { icon: "cash", text: "Cobrar"}, 
    { icon: "heart-outline", text: "Doação"},  
    { icon: "globe", text: "Transferir Internac."}, 
    { icon: "trending-up", text: "Investir"},  
    { icon: "logo-dropbox", text: "Caixinhas"}
  ]; 

  public slidesOptions: any = { slidesPerView: 4.5, freeMode: true} 

  public slidehelpersOptions: any = { slidesPerView: 1.5, freeMode: true} 

  public helpers : Array<any> =[
    {text: "Taxas menores que 0,99% em remessas internacionais"},
    {text: "Você tem até R$ 5.000,00 disponíveis para empréstimo."},
    {text: "Convide amigos para o Nubank e desbloqueie braões incríveis."}
  ]
}
