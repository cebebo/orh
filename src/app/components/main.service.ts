import { Injectable } from '@angular/core';
import { NewsItem, FreizeitItem, VorstandItem, PreiseItem } from './interfaces.model';
import { Firestore, collectionData, collection, doc, setDoc, getDocs, deleteDoc, getDoc } from '@angular/fire/firestore';
import { docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainService {



  constructor(private firestore: Firestore) {
    this.loadData();
  }

  version: number = 0;

  current: number = 1;
  overlay = false;
  mobileMenu = false;

  adminCount: number = 0;

  amountActives = 0;

  admPs: string = '';
  pwInput = '';
  access = false;
  admSection = 0;

  selectedColor: string = "#ffffff";

  freizeiten: FreizeitItem[] = [];
  news: NewsItem[] = [];
  preise: PreiseItem[] = [];
  vorstand: VorstandItem[] = [];

  async loadData() {
    const freizeitenSnap = await getDocs(collection(this.firestore, 'freizeiten'));
    this.freizeiten = freizeitenSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as FreizeitItem));

    const newsSnap = await getDocs(collection(this.firestore, 'news'));
    this.news = newsSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as NewsItem));

    const preiseSnap = await getDocs(collection(this.firestore, 'preise'));
    this.preise = preiseSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as PreiseItem));

    const vorstandSnap = await getDocs(collection(this.firestore, 'vorstand'));
    this.vorstand = vorstandSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as VorstandItem));

    const admPsDoc = await getDoc(doc(this.firestore, 'pwd', 'main'));
    if (admPsDoc.exists()) {
      const data = admPsDoc.data();
      this.admPs = data['password'] || '';
    } else {
      console.error('Admin-Passwort-Dokument nicht gefunden!');
    }
  }

  onPublishClick() {
    this.publishData().then(() => {
      alert('Daten erfolgreich veröffentlicht!');
    });
  }

  async publishData() {
    const freizeitenCol = collection(this.firestore, 'freizeiten');
    const newsCol = collection(this.firestore, 'news');
    const preiseCol = collection(this.firestore, 'preise');
    const vorstandCol = collection(this.firestore, 'vorstand');
    const admPsCol = collection(this.firestore, 'admPs');


    // Freizeiten speichern
    this.freizeiten.forEach(async item => {
      const itemId = item.id || doc(collection(this.firestore, 'freizeiten')).id;
      item.id = itemId;
      await setDoc(doc(this.firestore, 'freizeiten', itemId), item);
    });

    this.news.forEach(async item => {
      const itemId = item.id || doc(collection(this.firestore, 'news')).id;
      item.id = itemId;
      await setDoc(doc(this.firestore, 'news', itemId), item);
    });

    this.preise.forEach(async item => {
      const itemId = item.id || doc(collection(this.firestore, 'preise')).id;
      item.id = itemId;
      await setDoc(doc(this.firestore, 'preise', itemId), item);
    });

    this.vorstand.forEach(async item => {
      const itemId = item.id || doc(collection(this.firestore, 'vorstand')).id;
      item.id = itemId;
      await setDoc(doc(this.firestore, 'vorstand', itemId), item);
    });

    // this.admPs.forEach(async (item, i) => {
    //   await setDoc(doc(admPsCol, `admPs_${i}`), item);
    // });
  }


  async deleteItem(area: string, id: string) {
    // Dokument-ID anhand der Konvention zusammensetzen
    const docRef = doc(this.firestore, area, id);
    try {
      // Dokument in Firestore löschen
      await deleteDoc(docRef);

      // Lokalen Eintrag aus dem Array löschen
      switch (area) {
        case 'news':
          this.news = this.news.filter(item => item.id !== id);
          break;
        case 'freizeiten':
          this.freizeiten = this.freizeiten.filter(item => item.id !== id);
          break;
        case 'vorstand':
          this.vorstand = this.vorstand.filter(item => item.id !== id);
          break;
        case 'preise':
          this.preise = this.preise.filter(item => item.id !== id);
          break;
      }

      console.log(`Eintrag aus ${area} mit ID ${id} wurde gelöscht.`);
    } catch (error) {
      console.error('Fehler beim Löschen des Dokuments:', error);
    }
  }


  changeMainColor(): void {
    document.documentElement.style.setProperty('--maincolor', this.selectedColor);
  }

  noScroll(val: boolean) {
    if (val) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

}

