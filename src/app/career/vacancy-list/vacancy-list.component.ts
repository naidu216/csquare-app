import { Component, OnInit } from '@angular/core';
import { blogBasicDB } from '../../shared/data/blog/blog-basic/list'
@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {
  public blogData: any
  constructor() {
    this.blogData = blogBasicDB.list;
   }

  ngOnInit() {
  }

}
