import { Component, OnInit, HostListener } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service'
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, fadeInRight } from 'ng-animate';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 3, delay: 0 }
    }))]),
    // Set the desired animation of yours
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])
  ]
})
export class LandingComponent implements OnInit {
  fadeInLeft: any;
  fadeInRight: any;
  constructor(public colorPicker: ColorScssService, private route: ActivatedRoute,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
  this.colorPicker.setColorScheme('color-6');
  this.title.setTitle(this.route.snapshot.data['title']);
  this.title.setTitle(this.route.snapshot.data['title']);
  this.meta.updateTag({ name: 'description', content: this.route.snapshot.data['content'] })
  this.meta.addTag({ name: this.route.snapshot.data['title'], content: this.route.snapshot.data['content'] })
  this.meta.addTag({ property: "og:title", content: this.route.snapshot.data['content'] })
  }
  counter = [
    { 
     img:"assets/images/agency/counter/1.png",
     count: 2556,
     text: 'days worked'
    },
    { 
      img:"assets/images/agency/counter/2.png",
      count: 306,
      text: 'Project Finished'
     },
     { 
      img:"assets/images/agency/counter/3.png",
      count: 485,
      text: 'Cofee Cup'
     },
     { 
      img:"assets/images/agency/counter/4.png",
      count: 568,
      text: 'Happy Clients'
     },
    
  ]
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbara');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }  
}
