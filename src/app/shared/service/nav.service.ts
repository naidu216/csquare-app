import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
   type?: string;
   icon?:string;
	badgeType?: string;
	badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() {   }

  MENUITEMS: Menu[] = [
   {
   path: '/home', title: 'Home',  type: 'link'
   },
   {
    title: 'About', type: 'link', children: [
       { path: '/about/profile', title: 'Profile',  type: 'link' },
       { path: '/about/philosophy', title: 'Philosophy',  type: 'link' },
       { path: '/about/testimonial', title: 'Testimonials',  type: 'link' },
       { path: '/about/labosquare', title: 'LaboSquare',  type: 'link' },
   ]
},
   {
    path: '/projects', title: 'Projects',  type: 'link'
   },
   {
        path:'/service', title: 'Service', type: 'sub', children: [
           { path: '/service/serv-detail/1', title: 'Architecture',  type: 'link' },
           { path: '/service/serv-detail/2', title: 'InteriorDesign',  type: 'link' },
           { path: '/service/serv-detail/3', title: 'InfraExecution',  type: 'link' },
           { path: '/service/serv-detail/4', title: 'UrbanLandscapes',  type: 'link' },
           { path: '/service/serv-detail/5', title: 'Renovation',  type: 'link' },
           { path: '/service/serv-detail/6', title: 'TownPlanning',  type: 'link' },

       ]
   },
   {
    path: '/team', title: 'Team',  type: 'link'
   },
   {
    path: '/career', title: 'Careers',  type: 'link'
   },
   {
    path: '/contact', title: 'Contact',  type: 'link'
   },
  
  ]
 
    // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  
}
