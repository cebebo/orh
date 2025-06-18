import { inject, Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MainService } from './main.service';
import { NewsItem } from './interfaces.model';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {


// unsubNews;


// firestore: Firestore = inject(Firestore);
// main = inject(MainService);

// newsList: NewsItem[] = [];

// constructor() {

//     this.unsubNews = this.subNews();
//     // this.items$ = collectionData(this.getNews());
// }

// setNewsObject(news: any, id: string): NewsItem {
//     return {
//         id: id || "",
//         head: news.head || "",
//         body: news.body || "",
//         edit: news.edit || false,
//     }
// }

// ngonDestroy() {
//     this.unsubNews();
// }

// subNews() {
//     return onSnapshot(this.getNews(), (list) => {
//         this.main.news = [];
//         list.forEach(element => {
//            this.newsList.push(this.setNewsObject(element.data(), element.id)) 
//         });        
//     });
// }

// getNews() {
//     return collection(this.firestore, 'news');
// }

// getCamps() {
//     return collection(this.firestore, 'freizeiten');
// }

// getVorstand() {
//     return collection(this.firestore, 'vorstand');
// }

// getPricesSV() {
//     return collection(this.firestore, 'preiseSV');
// }

// getPricesVP() {
//     return collection(this.firestore, 'preiseVP');
// }

// getPass() {
//     return collection(this.firestore, 'pwd');
// }

// getSingleDoc(colID:string, docID:string) {
//     return doc(collection(this.firestore, colID), docID)
// }

}