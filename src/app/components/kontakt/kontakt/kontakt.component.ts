import { Component, inject, OnInit } from '@angular/core';
import { KtHeroComponent } from "../kt-hero/kt-hero.component";
import { KtAnreiseComponent } from "../kt-anreise/kt-anreise.component";
import { KtFormularComponent } from "../kt-formular/kt-formular.component";
import { MainService } from '../../main.service';
import { DatenschutzPopupComponent } from '../../shared/datenschutz-popup/datenschutz-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [KtHeroComponent, KtAnreiseComponent, KtFormularComponent, DatenschutzPopupComponent, CommonModule], 
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent implements OnInit {

   main = inject(MainService);
  
    ngOnInit(): void {
      this.main.current = 5;
    }
  

}
