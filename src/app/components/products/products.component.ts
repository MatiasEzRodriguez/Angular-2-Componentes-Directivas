import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.png'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/toy.png'
    },
    {
      id: '3',
      name: 'Coleccion de albumnes',
      price: 34,
      image: './assets/images/toy.png'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/toy.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
