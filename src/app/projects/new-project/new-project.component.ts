import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  public products : Products[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
