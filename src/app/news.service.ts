import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient : HttpClient) { }

  public API_KEY = '8d5ce8ec7cb94f9f9782d7914242562b';

  /**
   * getNews
   * Get all news
   */
  getNews() {
    return this.httpClient.get(`http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${this.API_KEY}`)
            .pipe(
              map( (news:any) => news.articles)
            );
  }

  

}
