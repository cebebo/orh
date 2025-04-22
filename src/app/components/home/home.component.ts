import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, LandingPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
