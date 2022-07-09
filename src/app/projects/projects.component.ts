import { Component, OnInit, HostListener } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service'
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  ButtonsConfig,
  ButtonsStrategy,
  AdvancedLayout,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  PlainGalleryConfig,
  PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public customizer: any = "all"
  allImages: Image[] = [
    new Image(0, { img: 'assets/images/portfolio/1.jpg' }),
    new Image(0, { img: 'assets/images/portfolio/2.jpg' }),
    new Image(1, { img: 'assets/images/portfolio/3.jpg' }),
    new Image(2, { img: 'assets/images/portfolio/5.jpg' }),
    new Image(3, { img: 'assets/images/portfolio/4.jpg' }),
    new Image(4, { img: 'assets/images/portfolio/6.jpg' }),
    new Image(5, { img: 'assets/images/portfolio/7.jpg' }),
    new Image(6, { img: 'assets/images/portfolio/8.png' }),
    new Image(7, { img: 'assets/images/portfolio/9.jpg' }),
  ];

  constructor(private displayblock: ColorScssService, private route: ActivatedRoute,
    private title: Title,
    private meta: Meta) { }
  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.allImages);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  openGallery(val) {
    this.customizer = val
  }

  ngOnInit() {
    this.displayblock.setColorScheme('color-6');
  this.title.setTitle(this.route.snapshot.data['title']);
  this.title.setTitle(this.route.snapshot.data['title']);
  this.meta.updateTag({ name: 'description', content: this.route.snapshot.data['content'] })
  this.meta.addTag({ name: this.route.snapshot.data['title'], content: this.route.snapshot.data['content'] })
  this.meta.addTag({ property: "og:title", content: this.route.snapshot.data['content'] })
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

  centerdSlide=[
    {
      img:'img1',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img2',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img3',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img4',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      img:'img5',
      title:"exclusive portfolio",
      year:"2019",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
]

centerdslideOption={
  items: 4,
  nav: false,
  autoplay: false,
  slideSpeed: 300,
  paginationSpeed: 400,
  dots: false,
  loop: true,
  responsive: {
      0: {
          items: 1,
          margin: 10
      },
      320: {
          items: 1,
          margin: 10
      },
      460: {
          items: 2
      },
      480: {
          items: 3
      },
      576: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
}
}
