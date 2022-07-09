import { Component, OnInit, HostListener } from '@angular/core';
import { ProductsService } from '../../shared/service/e-commerce/products.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  public url : any; 
  constructor(public productService:ProductsService) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbara');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }  
   //Close sidebar on click on outside the sidebar
   closeOverlay(){
    this.productService.filterBar = false;
  }

}
