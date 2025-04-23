import { Component } from '@angular/core';
import { Product } from './product/model/product';
import { ProductComponent } from "./product/product.component";
import { KoszykComponent } from "./koszyk/koszyk.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  imports: [ProductComponent, KoszykComponent, CommonModule]
})
export class AppComponent {
  title: string = 'app';
  naleznosc: number = 0;
  
product1 = new Product("Mleko", 2.50, new Date("3/15/2023"), false);
product2 = new Product("Ser", 11.99, new Date("3/10/2023"), true);
product3 = new Product("Chleb", 4.69, new Date("3/14/2023"), false);
product4 = new Product("Pierogi", 6.99, new Date("3/10/2023"), true);
product5 = new Product("Jogurt", 2.39, new Date("3/14/2023"), false);

onDodaj(product: Product):void{
  this.naleznosc += product.cena;
}
pokaz = false;
text = "Pokaz produkty";
Produkty(){
  this.pokaz=!this.pokaz;
  this.text = this.pokaz ? "Ukryj produkty" : "Pokaz produkty";
}
}
