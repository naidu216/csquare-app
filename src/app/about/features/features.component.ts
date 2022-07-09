import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  services = [
    {
      img: "assets/images/app_landing2/service/2-1.png",
      title: "On Time Completion",
      description: "We work according to the schedule project timeline to completion the project well before"
    },
    {
      img: "assets/images/app_landing2/service/2-2.png",
      title: "Transparency",
      description: "We ensure transparency in providing the minute detailing estimations and are effectively user friendly."
    },
    {
      img: "assets/images/app_landing2/service/2-3.png",
      title: "Easy Integration",
      description: "Being a Front runner, Our top most priority is maintaining standards in our work : Effeciency Effectivity & Equality"
    }
  ]

}
