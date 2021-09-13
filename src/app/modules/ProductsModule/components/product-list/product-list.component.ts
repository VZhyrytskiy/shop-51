import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  cards: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.cards = this.productsService.getProducts();
  }
}
