import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from './youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();
  private unsubscribe2$: Subject<any> = new Subject();
  searchText: string;


  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }


  ngOnInit() {
    this.searchText = ''
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000)
    this.videos = [];
    this.getYoutubeVideos()
  }
  getYoutubeVideos() {
    this.youTubeService
      .fetchVideos('news')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
      });
  }
  onSearch() {
    this.spinner.show()
    this.videos = []
    this.youTubeService
      .fetchVideos(this.searchText)
      .pipe(takeUntil(this.unsubscribe2$))
      .subscribe(lista => {
        this.searchText = ''
        for (let element of lista["items"]) {
          this.videos.push(element)
        }
        this.spinner.hide()
      });
  }

}
