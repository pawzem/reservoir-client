import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Organization} from './organization';
import {PartyId} from './party-id';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganizationClientService {


  // public organizations: Organization[] = [];

  constructor(private http: HttpClient) { }

  // loadOrganizations(): Observable<boolean> {
  //     return this.http.get<Organization[]>('api/v1/organization')
  //       .pipe(
  //         map((data: any[]) => {
  //           this.organizations = data;
  //           return true;
  //         }));
  //   }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(environment.baseUrl + 'organization');
  }

  public addFirm(firm: Organization): Observable<PartyId>  {

    return this.http.post<PartyId>('organization', firm, {
      headers: new HttpHeaders({  })
    });
  }


}
