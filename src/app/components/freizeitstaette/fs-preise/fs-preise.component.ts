import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-fs-preise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-preise.component.html',
  styleUrl: './fs-preise.component.scss'
})
export class FsPreiseComponent implements OnInit {

  main = inject(MainService);

  year: number = 0;
  type: number = 1;
  pricelist: any = this.main.preise;
  switchClassType: string = 'switchButton';
  switchClassYear: string = 'switchButton';
  template: any = '';
  dlLink: string = 'Selbstversorger 2025'
  yearIndex: number = 0;

  bonusYear: number[] = [];

  ngOnInit(): void {
    this.main.amountActives = this.countActives();
    this.setValue('year', 'left');
  }

  changeType() {
    if (this.type == 1) {
      this.type = 2;
      this.switchClassType = 'switchChange';
      // this.pricelist = this.main.preiseVP;
    }
    else {
      this.type = 1;
      this.switchClassType = 'switchChangeRev';
      // this.pricelist = this.main.preiseSV;
    }
    this.generateDownload();
  }

  setValue(file: string, value: string) {
    if (file == "year") {
      if (this.bonusYear.length == 1) { this.year = this.bonusYear[0] }
      if (this.bonusYear.length > 1) {
        if (value == 'left') { this.year = this.bonusYear[0] }
        if (value == 'middle') { this.year = this.bonusYear[1] }
        if (value == 'right') {
          this.year = this.bonusYear[1];
          if (this.bonusYear.length == 3) { this.year = this.bonusYear[2] }
        }
      }
    };
    this.changeYear();
    if (file == "type") {
      if (value == 'sv') { this.type = 0 };
      if (value == 'vp') { this.type = 1 };
      this.changeType();
    };
  }

  switchYear() {
    let bon = this.bonusYear;
    if (bon.length == 2) {
      if (this.year == bon[0]) {
        this.year = bon[1];
      }
      else {
        this.year = bon[0];
      }
    }
    if (bon.length == 3) {
      if (this.year == bon[0]) {
        this.year = bon[1];
      } else if (this.year == bon[1]) {
        this.year = bon[2];
      } else if (this.year == bon[2]) {
        this.year = bon[0];
      }
    }
    this.changeYear();
  }

  changeYear() {
    let bon = this.bonusYear;
    if (bon.length == 2) {
      if (this.year == bon[0]) {
        this.switchClassYear = 'switchChangeRev';
        this.yearIndex = 0;
      }
      else {
        this.switchClassYear = 'switchChange';
        this.yearIndex = 1;
      }
    }
    if (bon.length == 3) {
      if (this.year == bon[0]) {
        this.switchClassYear = 'switchChangeRev';
        this.yearIndex = 0;
      } else if (this.year == bon[1]) {
        this.switchClassYear = 'switchChangeFirst';
        this.yearIndex = 1;
      } else if (this.year == bon[2]) {
        this.switchClassYear = 'switchChangeSecond';
        this.yearIndex = 2;
      }

    }
    this.generateDownload();
  }

  generateDownload() {
    if (this.type == 1) {
      this.dlLink = "Selbstversorger " + this.main.preise[this.bonusYear[this.yearIndex]].year;
    } else {
      this.dlLink = "Verpfleger " + this.main.preise[this.bonusYear[this.yearIndex]].year;
    }
  };

  countActives() {
    let amount = 0;
    for (let count = 0; count < this.main.preise.length; count++) {
      amount = amount + this.main.preise[count].active;
      if (this.main.preise[count].active == 1) { this.bonusYear.push(count) }
    }
    return amount;

  }

  findYear() {
    if (this.bonusYear.length == 2) {
      return this.main.preise[this.bonusYear[1]].year
    } else if (this.bonusYear.length == 3) {
      return this.main.preise[this.bonusYear[2]].year
    } else return null;
  }


}
