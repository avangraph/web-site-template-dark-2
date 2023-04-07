import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SiteService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  params = new HttpParams();

  private cachedData$!: Observable<any>;

  public siteData$ = new Subject();

  constructor(private http: HttpClient) {
  }

  getData(url: any): Observable<any> {
    if (!this.cachedData$) {
      this.cachedData$ = this.http.get<any>(environment.apiUrl + '/sites/' + url, { headers: this.headers, params: this.params, observe: 'response', responseType: 'json' }).pipe(
        // map((response: any) => response.data),
        shareReplay(1)
      );
    }
    return this.cachedData$;
  }

  setSiteData(data: any): void {
    this.siteData$.next({ ...data });
  }

}
