import { Component, inject, OnInit } from '@angular/core';
import { FsHeroComponent } from "../fs-hero/fs-hero.component";
import { FsPreiseComponent } from "../fs-preise/fs-preise.component";
import { FsGrundrissComponent } from "../fs-grundriss/fs-grundriss.component";
import { FsBelegungsplanComponent } from "../fs-belegungsplan/fs-belegungsplan.component";
import { FsBilderComponent } from "../fs-bilder/fs-bilder.component";
import { FsUmgebungComponent } from "../fs-umgebung/fs-umgebung.component";
import { MainService } from '../../main.service';

@Component({
  selector: 'app-freizeitstaette',
  standalone: true,
  imports: [FsHeroComponent, FsPreiseComponent, FsGrundrissComponent, FsBelegungsplanComponent, FsBilderComponent, FsUmgebungComponent],
  templateUrl: './freizeitstaette.component.html',
  styleUrl: './freizeitstaette.component.scss'
})
export class FreizeitstaetteComponent implements OnInit {

  main = inject(MainService);

  ngOnInit(): void {
    this.main.current = 2;
  }
}
