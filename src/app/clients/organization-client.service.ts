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



  constructor(private http: HttpClient) { }
  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(environment.baseUrl + 'organization');
  }

  public addFirm(firm: Organization): Observable<PartyId>  {

    return this.http.post<PartyId>(environment.baseUrl + 'organization', firm);
  }


}
