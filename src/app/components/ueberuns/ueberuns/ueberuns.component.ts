import { Component } from '@angular/core';
import { UebuVereinComponent } from "../uebu-verein/uebu-verein.component";
import { UebuHeroComponent } from "../uebu-hero/uebu-hero.component";
import { UebuNamenComponent } from "../uebu-namen/uebu-namen.component";
import { UebuReferentComponent } from "../uebu-referent/uebu-referent.component";

@Component({
  selector: 'app-ueberuns',
  standalone: true,
  imports: [UebuVereinComponent, UebuHeroComponent, UebuNamenComponent, UebuReferentComponent],
  templateUrl: './ueberuns.component.html',
  styleUrl: './ueberuns.component.scss'
})
export class UeberunsComponent {

}
