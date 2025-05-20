import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MainService } from '../main.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  main = inject(MainService);

  count = 0
  currentNews = this.main.news[this.count];


  ngOnInit(): void {
    this.rotateInfo();
  }


  rotateInfo() {
    let allNews = this.main.news.length;
    //     setInterval(() => {

    //       this.count++;

    //       if (this.count == allNews) { this.count = 0 };
    //       this.currentNews = this.news[this.count];
    // console.log(this.count);

    //     }, 3000);
  }

  selectNews(index: number): void {
    this.count = index;
    this.currentNews = this.main.news[index];
  }



}
