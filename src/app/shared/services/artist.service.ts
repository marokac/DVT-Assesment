import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ArtistService {
  constructor(private http: HttpClient) {}

  public searchArtist(searchStr: string): Observable<any> {
    return this.http
      .get(`/search?q=artist:${searchStr}`, {
        observe: 'response',
      })
      .pipe(
        map((response: any) => {
          return response.body;
        })
      );
  }

  public loadArtistDetails(id: string): Observable<any> {
    return this.http
      .get(`/artist/${id}`, {
        observe: 'response',
      })
      .pipe(
        map((response: any) => {
          return response.body;
        })
      );
  }

  public loadArtistAlbums(id: string): Observable<any> {
    return this.http
      .get(`/artist/${id}/albums`, {
        observe: 'response',
      })
      .pipe(
        map((response: any) => {
          return response.body;
        })
      );
  }
}
