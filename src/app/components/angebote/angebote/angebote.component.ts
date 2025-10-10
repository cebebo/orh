import { Component, inject, OnInit } from '@angular/core';
import { AngFit4lifeComponent } from "../ang-fit4life/ang-fit4life.component";
import { AngFreizeitenComponent } from '../ang-freizeiten/ang-freizeiten.component';
import { AngGemeindeComponent } from '../ang-gemeinde/ang-gemeinde.component';
import { AngHeroComponent } from '../ang-hero/ang-hero.component';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';
import { DatenschutzPopupComponent } from '../../shared/datenschutz-popup/datenschutz-popup.component';
import { BedingungenPopupComponent } from '../../shared/bedingungen-popup/bedingungen-popup.component';
import { GrundsatzPopupComponent } from '../../shared/grundsatz-popup/grundsatz-popup.component';

@Component({
  selector: 'app-angebote',
  standalone: true,
  imports: [AngFit4lifeComponent, AngFreizeitenComponent, AngGemeindeComponent, AngHeroComponent, CommonModule, DatenschutzPopupComponent, BedingungenPopupComponent, GrundsatzPopupComponent],
  templateUrl: './angebote.component.html',
  styleUrl: './angebote.component.scss'
})
export class AngeboteComponent implements OnInit{

  main = inject(MainService);

  ngOnInit(): void {
    this.main.current = 3;
  }

}
