import { Component, OnInit } from '@angular/core';
import { ColorScssService } from '../../shared/service/color-scss.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coreprinciples',
  templateUrl: './coreprinciples.component.html',
  styleUrls: ['./coreprinciples.component.scss']
})
export class CoreprinciplesComponent implements OnInit {

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
  features = [
    {
      img:'assets/images/saas2/advance-feature/1.png',
      title: 'Our Vision',
      description: 'Sustainable environment for generations to live in and to be a game changer in construction industry globally.'
    },
    {
      img:'assets/images/saas2/advance-feature/2.png',
      title: 'Our Mission',
      description: 'to provide design service, safety execution and a tantalizing atmosphere, enabling owners to spend wisely sticking to quality & quantity.'
    },
    {
      img:'assets/images/saas2/advance-feature/3.png',
      title: 'Our Values',
      description: 'Transparency in operations, Innovative & revolutionary in purest form, not violating culture and traditions'
    }
  ]
  
}
