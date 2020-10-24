import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: any;
  source: string;

  constructor(private router: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( params => {
      this.source = params.get('source');
      this.newsService.getNews(this.source).subscribe(
        (news:any) => {
          this.news = news;
          console.log(this.news);
        }
      );
    })    
  }

}
