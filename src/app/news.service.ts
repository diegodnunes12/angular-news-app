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
  getNews(source: string) {
    //return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.API_KEY}`)
    return this.httpClient.get(`/api?sources=${source}&apiKey=${this.API_KEY}`)
            .pipe(
              map( (news:any) => news.articles)
            );
  }

  /* http://newsapi.org/v2/everything?q=corinthians&apiKey=8d5ce8ec7cb94f9f9782d7914242562b */

}
