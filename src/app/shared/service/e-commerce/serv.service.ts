import { Injectable } from '@angular/core';
import { Services } from '../../model/e-commerce/service.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

// Get product from Localstorage
let services = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public currency: string = 'USD';
  public catalogMode : boolean = false;
  
  // For toggling filter of detail page in mobile view
  public filterBar : boolean = false;

  constructor(private http: HttpClient,private toastrService: ToastrService) {

  }

  private services(): Observable<Services[]> {
    return this.http.get('assets/data/ecommerce/services.json').map((res: any) => {
      return res;
  })
}

  public getServices(): Observable<Services[]> {
    return this.services();
  }

  public getService(id : number): Observable<Services> {

    return this.services().pipe(map(items => {
      return items.find((item: Services) => {
        return item.id === id;
      });
    }));
  }


}