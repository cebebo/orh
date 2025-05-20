import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-ad-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-hero.component.html',
  styleUrl: './ad-hero.component.scss'
})
export class AdHeroComponent {

perm = inject(MainService);
alert = false;

checkPwd() {
  if(this.perm.pwInput === this.perm.admPs) {
    console.log('Ja');
    this.perm.access = true;
    this.alert = false;
  } else {
    console.log('Nein');
    this.perm.access = false;
    this.alert = true;
  }
}

}
