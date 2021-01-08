import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch, Organization, Workstation} from './organization';
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

  getWorkstations(parentId: string): Observable<Workstation[]> {
    const params = new HttpParams()
      .set('branchId', parentId);
    return this.http.get<Workstation[]>(environment.baseUrl + 'workstation', {params});
  }

  public addWorkstation(workstation: Workstation): Observable<PartyId>  {

    return this.http.post<PartyId>(environment.baseUrl + 'workstation', workstation);
  }

  public addFirm(firm: Organization): Observable<PartyId>  {

    return this.http.post<PartyId>(environment.baseUrl + 'organization', firm);
  }

}
