import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';
import { PreiseItem } from '../../interfaces.model';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-preise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-preise.component.html',
  styleUrl: './ad-preise.component.scss'
})
export class AdPreiseComponent implements OnInit {

  main = inject(MainService);
  regYear = 0;



  prices: PreiseItem = {
    year: 0,
    kids: 0,
    teens: 0,
    adults: 0,
    counselor: 0,
    seniorAdults: 0,
    singleRoom: 0,
    doubleRoom: 0,
    singleNight: 0,
    churchGroup: 0,
    coffeeCakeKids: 0,
    coffeeCakeTeens: 0,
    coffeeCakeAdults: 0,
    grill: 0,
    kitchenDuty: 0,
    sheets: 0,
    towelBig: 0,
    towelSmall: 0,
    to60kids: 0,
    to60adults: 0,
    up60kids: 0,
    up60adults: 0,
    cleanUp: 0,
    apron: 0,
    teaTowel: 0,
    dishcloth: 0,
    active: 0
  }

  ngOnInit(): void {
    this.startEdit(this.regYear);
    this.main.amountActives = this.countActives();
  }

  changeBol(index: number) {
    let amount = this.countActives();
    const temp = this.main.preise[index].temp;
    
    if (temp) {
      if (temp.active == 0) {
        if (amount < 3) {
          temp.active = 1
        } else { console.log('Maximalzahl erreicht!') }
      }
      else {
        if (amount > 1) {
          temp.active = 0
        } else { console.log('Minimalzahl erreicht!') }
      }
    }
  }

  countActives() {
    let amount = 0;
    for (let count = 0; count < this.main.preise.length; count++) {
      const item = this.main.preise[count].temp ?? this.main.preise[count];
      amount += item.active;
    }
    return amount;
  }

  addNewYear() {
    let amount = this.main.preise.length;
    if (amount < 5) {
      let nextYear = this.main.preise[amount - 1].year + 1;
      this.eraseForm();
      this.prices.year = nextYear;
      this.main.preise.push({ ...this.prices });
      this.startEdit(this.main.preise.length - 1);
    }
  }

  eraseForm() {
    this.prices = {
      year: 0,
      kids: 0,
      teens: 0,
      adults: 0,
      counselor: 0,
      seniorAdults: 0,
      singleRoom: 0,
      doubleRoom: 0,
      singleNight: 0,
      churchGroup: 0,
      coffeeCakeKids: 0,
      coffeeCakeTeens: 0,
      coffeeCakeAdults: 0,
      grill: 0,
      kitchenDuty: 0,
      sheets: 0,
      towelBig: 0,
      towelSmall: 0,
      to60kids: 0,
      to60adults: 0,
      up60kids: 0,
      up60adults: 0,
      cleanUp: 0,
      apron: 0,
      teaTowel: 0,
      dishcloth: 0,
      active: 0
    }
  }

  get editPrices() {
    return this.main.preise[this.regYear]?.temp ?? null;
  }


  startEdit(i: number) {
    this.regYear = i;
    this.main.preise[i].temp = { ...this.main.preise[i] };
  }

  deletePrices(i: number) {
    if (this.main.preise.length > 1) {
      this.main.preise.splice(i, 1);
    }
  }

  savePriceList(): void {
    const index = this.regYear;
    if (index !== null && this.main.preise[index].temp) {
      this.main.preise[index] = { ...(this.main.preise[index].temp as PreiseItem) };
      this.main.amountActives = this.countActives();
      this.startEdit(index);
      console.log(this.main.preise);
    }
  }


}
