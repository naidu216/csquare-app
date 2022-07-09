import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-labosquare',
  templateUrl: './labosquare.component.html',
  styleUrls: ['./labosquare.component.scss']
})
export class LabosquareComponent implements OnInit {

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
}
