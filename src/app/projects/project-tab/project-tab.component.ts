import { Component, OnInit } from '@angular/core';
import { Products } from '../../shared/model/e-commerce/product.model';
import { ProductsService } from '../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.scss']
})
export class ProjectTabComponent implements OnInit {
  public products     :   Products[] = [];
  public activeCategory      : string = 'all';

  constructor(private productsService: ProductsService) { 
    this.getCategoryProduct(this.activeCategory);
  }

  ngOnInit() {
  }

  getCategoryProduct(category){
    this.productsService.getProductByCategory(category).subscribe(products => {           
      this.products = products.slice(0,24)
   })
   this.activeCategory = category
  }

}
