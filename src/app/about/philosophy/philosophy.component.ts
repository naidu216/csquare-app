import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {
  public work: any = 'Configuration'
  constructor() { }

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
  openWorkSlide(val){
    this.work = val
  }
  nav = [
    {
      img:'assets/images/saas1/tab-icon/installation.png',
      title:'Initializing'
    },
    {
      img:'assets/images/saas1/tab-icon/001-tap.png',
      title:'Add Instances'
    },
    {
      img:'assets/images/saas1/tab-icon/button.png',
      title:'Configuration'
    },
    {
      img:'assets/images/saas1/tab-icon/002-settings.png',
      title:'API Setting'
    },
    {
      img:'assets/images/saas1/tab-icon/key-1.png',
      title:'Security'
    }
  ]

  content=[
    {
      img:'assets/images/saas1/tab/Initializing.png',
      title:'Initializing'
    },
    {
      img:'assets/images/saas1/tab/Add-instant.png',
      title:'Add Instances'
    },
    {
      img:'assets/images/saas1/tab/Configuration.png',
      title:'Configuration'
    },
    {
      img:'assets/images/saas1/tab/Api.png',
      title:'API Setting'
    },
    {
      img:'assets/images/saas1/tab/Security.png',
      title:'Security'
    }
  ]

}
