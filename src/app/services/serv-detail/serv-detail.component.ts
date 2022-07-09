import { Component, OnInit, HostListener } from '@angular/core';
import { blogBasicDB } from '../../shared/data/blog/blog-basic/split'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router} from '@angular/router';
import { Services } from '../../shared/model/e-commerce/service.model';
import { ServicesService } from '../../shared/service/e-commerce/serv.service';

@Component({
  selector: 'app-serv-detail',
  templateUrl: './serv-detail.component.html',
  styleUrls: ['./serv-detail.component.scss'],
  
})
export class ServDetailComponent implements OnInit {
  public blogData: any
  public service            :  Services = {};
  public services    :    Services[] = [];
  public items        :   Services[] = [];
  public allItems     :   Services[] = [];
 
  constructor(private route: ActivatedRoute, private router: Router,
    public servicesService: ServicesService, private modalService: NgbModal) { 
    this.blogData = blogBasicDB.split;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.servicesService.getService(id).subscribe(service => this.service = service)
    });
   
  }

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
  banner = [
    {
      img: 'assets/images/ecommerce/1.jpg',
      title: 'Big collection',
      description: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      btn: 'Collection',
      link: '/e-commerce/left-sidebar/collection/new'
    },
    {
      img: 'assets/images/ecommerce/2.jpg',
      title: 'Exclusive Offer',
      description: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.',
      btn: 'Offer',
      link: '/e-commerce/left-sidebar/collection/trending'
    }
  ]
  testimonialcarousel1 = [
    { 
      quote:"assets/images/saas1/testimonail-dot.png",
      review:"Life before Company was very chaotic — we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.",
      userImg:"assets/images/saas1/testi-profile.png",
      userName:"Elmer Harvy",
      position:"Graphics Designer"    
    }
  ]
  
  testimonialcarouselOptions1= {
    items: 1,
    loop: true,
    margin: 10,
    nav: false
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
