import { Component, OnInit, HostListener } from '@angular/core';
import { ColorScssService } from '../shared/service/color-scss.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
