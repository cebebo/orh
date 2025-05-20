import { Component, inject } from '@angular/core';
import { AdHeroComponent } from '../ad-hero/ad-hero.component';
import { AdNewstickerComponent } from '../ad-newsticker/ad-newsticker.component';
import { AdFreizeitenComponent } from '../ad-freizeiten/ad-freizeiten.component';
import { AdPreiseComponent } from '../ad-preise/ad-preise.component';
import { AdVorstandComponent } from '../ad-vorstand/ad-vorstand.component';
import { CommonModule } from '@angular/common';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdHeroComponent, AdNewstickerComponent, AdFreizeitenComponent, AdPreiseComponent, AdVorstandComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

perm = inject(MainService);

}
