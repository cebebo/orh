import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ad-newsticker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-newsticker.component.html',
  styleUrl: './ad-newsticker.component.scss'
})
export class AdNewstickerComponent {

  main = inject(MainService);

  news = {
    head: "",
    body: "",
    edit: false
  };

  saveChanges(i: number) {

    this.main.news[i].head = this.news.head;
    this.main.news[i].body = this.news.body;
    this.eraseNews();

  }

  addNews() {
    this.main.news.push(this.news)
    this.eraseNews();
  }

  eraseNews() {
    // this.news.head = "";
    // this.news.body = "";
  }

}
