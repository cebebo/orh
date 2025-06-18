import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { FormsModule } from '@angular/forms';
import { NewsItem } from '../../interfaces.model';

@Component({
  selector: 'app-ad-newsticker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-newsticker.component.html',
  styleUrl: './ad-newsticker.component.scss'
})
export class AdNewstickerComponent {

  main = inject(MainService);

  news: NewsItem = {
    head: "",
    body: "",
    edit: false
  };

  newMode = false;


  saveChanges(i: number) {
    const item = this.main.news[i];
    if (item.temp) {
      item.head = item.temp.head;
      item.body = item.temp.body;
      item.edit = false;
      delete item.temp;

    }
  }


  startEdit(i: number) {
    const item = this.main.news[i];
    item.temp = { head: item.head, body: item.body };
    item.edit = true;
  }


  cancelEdit(i: number) {
    this.main.news[i].edit = false;
    delete this.main.news[i].temp;
  }


  addNews() {
    this.main.news.push({ ...this.news });
    this.eraseNews();
  }

  eraseNews() {
    this.news = {
      head: '',
      body: '',
      edit: false
    };
    this.newMode = false;
  }

  


}

