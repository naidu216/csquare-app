import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ColorScssService } from '../../../service/color-scss.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public url: any;

  constructor(private router: Router,public colorPicker: ColorScssService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }


  ngOnInit() {    
    this.colorPicker.setColorScheme('color-6');
  }

}
