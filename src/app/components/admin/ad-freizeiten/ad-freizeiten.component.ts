import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FreizeitItem } from '../../interfaces.model';

@Component({
  selector: 'app-ad-freizeiten',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-freizeiten.component.html',
  styleUrl: './ad-freizeiten.component.scss'
})
export class AdFreizeitenComponent {

  main = inject(MainService);

  editMode = false;
  newCamp = false;
  chosenCamp: number | null = null;


  freizeiten: FreizeitItem = {
    title: "",
    category: "",
    date: "",
    location: "",
    age: "",
    price: "",
    description: "",
    img: "",
    perm_swim: "aus",
    perm_hike: "aus",
    perm_ski: "aus",
    perm_ind: "aus",
    perm_photo: "aus",
    edit: false
  };

  categories = [
    { value: 'kids', label: 'Kinder' },
    { value: 'teens', label: 'Jugendliche' },
    { value: 'education', label: 'Schulungen' }
  ];

  addCamp() {
    if (this.freizeiten.age && this.freizeiten.date && this.freizeiten.description && this.freizeiten.location && this.freizeiten.price && this.freizeiten.title) {
      if (this.freizeiten.category == "kids") {
        this.freizeiten.img = "kids_1.jpg";
        console.log("Ziel:" + this.freizeiten.img);
      }
      if (this.freizeiten.category == "teens") {
        this.freizeiten.img = "teens_.jpg";
      }
      if (this.freizeiten.category == "education") {
        this.freizeiten.img = "edu_.jpg";
      }

      this.main.freizeiten.push({ ...this.freizeiten });
      this.eraseCamp();
    }

  }

  eraseCamp() {
    this.freizeiten = {
      title: "",
      category: "",
      date: "",
      location: "",
      age: "",
      price: "",
      description: "",
      img: "",
      perm_swim: "aus",
      perm_hike: "aus",
      perm_ski: "aus",
      perm_ind: "aus",
      perm_photo: "aus",
      edit: false
    };
    this.newCamp = false;
  }

  saveCamp(): void {
    const index = this.chosenCamp;
    if (index !== null && this.main.freizeiten[index].temp) {
      // temp zurück in das eigentliche Camp kopieren
      this.main.freizeiten[index] = {
        ...this.main.freizeiten[index],
        ...this.main.freizeiten[index].temp
      };
      delete this.main.freizeiten[index].temp;
    }
    this.editMode = false;
    this.chosenCamp = null;
  }

  get editingCamp() {
    if (this.chosenCamp !== null && this.main.freizeiten[this.chosenCamp]) {
      return this.main.freizeiten[this.chosenCamp].temp;
    }
    return null;
  }

  startEdit(i: number) {
    this.chosenCamp = i;
    this.editMode = true;
    this.newCamp = false;
    // Temporäres Objekt zum Bearbeiten anlegen (kopieren)
    this.main.freizeiten[i].temp = { ...this.main.freizeiten[i] };
  }

  changePerm(category:string) {
    switch (category) {
      case 'swim':
        this.freizeiten.perm_swim = this.switchPerm(this.freizeiten.perm_swim);
        break;
      case 'hike':
        this.freizeiten.perm_hike = this.switchPerm(this.freizeiten.perm_hike);
        break;
      case 'ski':
        this.freizeiten.perm_ski = this.switchPerm(this.freizeiten.perm_ski);
        break;
      case 'ind':
        this.freizeiten.perm_ind = this.switchPerm(this.freizeiten.perm_ind);
        break;
      case 'photo':
        this.freizeiten.perm_photo = this.switchPerm(this.freizeiten.perm_photo);
        break;
    }
    console.log(this.freizeiten);
  }

  changeEditPerm(category:string, camp:any) {
    switch (category) {
      case 'swim':
        camp.perm_swim = this.switchPerm(camp.perm_swim);
        break;
      case 'hike':
        camp.perm_hike = this.switchPerm(camp.perm_hike);
        break;
      case 'ski':
        camp.perm_ski = this.switchPerm(camp.perm_ski);
        break;
      case 'ind':
        camp.perm_ind = this.switchPerm(camp.perm_ind);
        break;
      case 'photo':
        camp.perm_photo = this.switchPerm(camp.perm_photo);
        break;
    }
    console.log("Bearbeitet: " + camp);
  }

  switchPerm(cat:string) {
    if(cat == 'aus') {
      cat = 'ja'
    } else { cat = 'aus' }    
    return cat;
  }

}
