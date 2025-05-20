import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-fs-preise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-preise.component.html',
  styleUrl: './fs-preise.component.scss'
})
export class FsPreiseComponent {

  main = inject(MainService);

  year: number = 1;
  type: number = 1;
  pricelist: any = this.main.preiseSV;
  switchClassType: string = 'switchButton';
  switchClassYear: string = 'switchButton';
  template: any = '';
  dlLink:string = 'Selbstversorger 2025'

  changeType() {
    if (this.type == 1) {
      this.type = 2;
      this.switchClassType = 'switchChange';
      this.pricelist = this.main.preiseVP;
    }
    else {
      this.type = 1;
      this.switchClassType = 'switchChangeRev';
      this.pricelist = this.main.preiseSV;
    }
    this.generateDownload();
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
    this.generateDownload();
  }

  generateDownload() {
    if(this.type == 1) {
      if(this.year == 1) {
        this.dlLink = "Selbstversorger " + this.main.preiseSV[0].year;
      } else {
        this.dlLink = "Selbstversorger " + this.main.preiseSV[1].year;
      }
    } else {
      if(this.year == 1) {
        this.dlLink = "Verpfleger " + this.main.preiseVP[0].year;
      } else {
        this.dlLink = "Verpfleger " + this.main.preiseVP[1].year;
      }
    }
  };

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
