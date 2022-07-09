import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-modern-team-member',
  templateUrl: './modern-team-member.component.html',
  styleUrls: ['./modern-team-member.component.scss']
})
export class ModernTeamMemberComponent implements OnInit {

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

  users = [
    { 
      img:"assets/images/app_landing2/team/1.png",
      name:"Venkatesh Vaddi",
      designation:"Managing Director",
    },
    { 
      img:"assets/images/app_landing2/team/2.png",
      name:"Srikanth Addagatla",
      designation:"Cheif Managing Director",
    },
    { 
      img:"assets/images/app_landing2/team/3.png",
      name:"Vinod Naidu Vaddi",
      designation:"Principal Architect",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Dasardh Gutti",
      designation:"Principal Designer",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Kavya Manda",
      designation:"Marketing Head",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Lalitha Tammana",
      designation:"Lead Architect",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Bindu BSRH",
      designation:"Lead Designer",
    },
    { 
      img:"assets/images/app_landing2/team/4.png",
      name:"Jahangir Pasha",
      designation:"Director Projects",
    }
  ]
}
