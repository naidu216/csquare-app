import { Injectable } from '@angular/core';
import { Team } from '../../model/e-commerce/team.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

// Get product from Localstorage
let team = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public currency: string = 'USD';
  public catalogMode : boolean = false;
  
  // For toggling filter of detail page in mobile view
  public filterBar : boolean = false;

  constructor(private http: HttpClient,private toastrService: ToastrService) {

  }

  private team(): Observable<Team[]> {
    return this.http.get('assets/data/ecommerce/team.json').map((res: any) => {
      return res;
  })
}

  public getTeams(): Observable<Team[]> {
    return this.team();
  }

  public getTeam(id : number): Observable<Team> {

    return this.team().pipe(map(items => {
      return items.find((item: Team) => {
        return item.id === id;
      });
    }));
  }


}