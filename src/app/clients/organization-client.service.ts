import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch, Organization} from './organization';
import {PartyId} from './party-id';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationClientService {



  constructor(private http: HttpClient) { }
  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(environment.baseUrl + 'organization');
  }

  getBranches(parentId: string): Observable<Branch[]> {
    const params = new HttpParams()
      .set('companyId', parentId);
    return this.http.get<Branch[]>(environment.baseUrl + 'branch', {params});
  }

  public addBranch(branch: Branch): Observable<PartyId>  {

    return this.http.post<PartyId>(environment.baseUrl + 'branch', branch);
  }

  public addFirm(firm: Organization): Observable<PartyId>  {

    return this.http.post<PartyId>(environment.baseUrl + 'organization', firm);
  }

}
