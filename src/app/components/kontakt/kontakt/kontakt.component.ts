import { Component } from '@angular/core';
import { KtHeroComponent } from "../kt-hero/kt-hero.component";
import { KtAnreiseComponent } from "../kt-anreise/kt-anreise.component";
import { KtFormularComponent } from "../kt-formular/kt-formular.component";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [KtHeroComponent, KtAnreiseComponent, KtFormularComponent],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

}
