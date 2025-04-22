import { Component } from '@angular/core';
import { AngFit4lifeComponent } from "../ang-fit4life/ang-fit4life.component";
import { AngFreizeitenComponent } from '../ang-freizeiten/ang-freizeiten.component';
import { AngGemeindeComponent } from '../ang-gemeinde/ang-gemeinde.component';
import { AngHeroComponent } from '../ang-hero/ang-hero.component';

@Component({
  selector: 'app-angebote',
  standalone: true,
  imports: [AngFit4lifeComponent, AngFreizeitenComponent, AngGemeindeComponent, AngHeroComponent],
  templateUrl: './angebote.component.html',
  styleUrl: './angebote.component.scss'
})
export class AngeboteComponent {

}
