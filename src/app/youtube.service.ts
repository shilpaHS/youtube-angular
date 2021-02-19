import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyDyz1QJr-TFw6zSymptFtE039KOwx5baqs';

  constructor(public http: HttpClient) { }

  fetchVideos(channel): Observable<Object> {
    let url = 'https://ve4vyv40l1.execute-api.ap-south-1.amazonaws.com/enable-cors/InstaAPI?' + channel
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

}
