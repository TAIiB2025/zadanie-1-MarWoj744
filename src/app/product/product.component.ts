import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './model/product';
import { core } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input("product") product?: Product;
@Output() dodaj: EventEmitter<Product> = new EventEmitter<Product>();

onDodaj(){
  this.dodaj.emit(this.product);
}
}
