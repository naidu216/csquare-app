
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, fadeInRight } from 'ng-animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serv-list',
  templateUrl: './serv-list.component.html',
  styleUrls: ['./serv-list.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, {
      // Set the duration to 5seconds and delay to 0seconds
      params: { timing: 3, delay: 0 }
    }))]),
    // Set the desired animation of yours
    trigger('fadeInRight', [transition('* => *', useAnimation(fadeInRight))])
  ]
})
export class ServListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
