import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fs-preise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-preise.component.html',
  styleUrl: './fs-preise.component.scss'
})
export class FsPreiseComponent {

  preiseSV = [
    {
      "year": 2025,
      "to60kids": 1050.00,
      "to60adults": 1560.00,
      "up60kids": 17.50,
      "up60adults": 26.00,
      "cleanUp": 450.00,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00,
      "apron": 2.50,
      "teaTowel": 1.00,
      "dishcloth": 0.50
    },
    {
      "year": 2026,
      "to60kids": 1110.00,
      "to60adults": 1620.00,
      "up60kids": 18.50,
      "up60adults": 27.00,
      "cleanUp": 500.00,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00,
      "apron": 2.50,
      "teaTowel": 1.00,
      "dishcloth": 0.50
    }
  ];

  preiseVP = [
    {
      "year": 2025,
      "kids": 35.80,
      "teens": 38.80,
      "adults": 44.00,
      "counselor": 51.00,
      "seniorAdults": 57.51,
      "singleRoom": 7.00,
      "doubleRoom": 4.00,
      "singleNight": 4.00,
      "churchGroup": 2.00,
      "coffeeCakeKids": 4.50,
      "coffeeCakeTeens": 5.00,
      "coffeeCakeAdults": 5.50,
      "grill": 2.50,
      "kitchenDuty": 2.50,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00
    },
    {
      "year": 2026,
      "kids": 37.60,
      "teens": 40.60,
      "adults": 46.00,
      "counselor": 53.50,
      "seniorAdults": 60.31,
      "singleRoom": 7.00,
      "doubleRoom": 4.00,
      "singleNight": 4.00,
      "churchGroup": 2.00,
      "coffeeCakeKids": 4.50,
      "coffeeCakeTeens": 5.00,
      "coffeeCakeAdults": 5.50,
      "grill": 2.50,
      "kitchenDuty": 2.50,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00
    }
  ];

  year: number = 1;
  type: number = 1;
  pricelist: any = this.preiseSV;
  switchClassType: string = 'switchButton';
  switchClassYear: string = 'switchButton';
  template: any = '';

  changeType() {
    if (this.type == 1) {
      this.type = 2;
      this.switchClassType = 'switchChange';
      this.pricelist = this.preiseVP;
    }
    else {
      this.type = 1;
      this.switchClassType = 'switchChangeRev';
      this.pricelist = this.preiseSV;
    }
  }

  changeYear() {
    if (this.year == 1) {
      this.year = 2;
      this.switchClassYear = 'switchChange';
    }
    else {
      this.year = 1;
      this.switchClassYear = 'switchChangeRev';
    }
  }

  setValue(file: string, value: number) {
    if (file == "year") {
      this.year = value;
      this.changeYear();
    };
    if (file == "type") {
      this.type = value;
      this.changeType();
    };
  }


 

}
