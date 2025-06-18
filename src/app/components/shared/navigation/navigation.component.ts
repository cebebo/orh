import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  main = inject(MainService);

  public overlayOpen = false;
  public overlayClosing = false;

  clickcolor = 1;

  colormix() {
    this.clickcolor++;
    if(this.clickcolor == 5) {this.clickcolor = 1}
  }

  toggleMenu(): void {
    if (this.overlayOpen) {
      // Starte Schließen-Animation
      this.overlayClosing = true;
      setTimeout(() => {
        this.overlayClosing = false;
        this.overlayOpen = false;
      }, 500); // Entspricht deiner CSS-Animationsdauer: .5s
    } else {
      this.overlayOpen = true;
      this.overlayClosing = false;
    }
  }


  changeSite(num: number) {
    this.main.current = num;
    this.main.overlay = false;
    this.toggleMenu();
  }

  adminCounter() {
    this.main.adminCount++;
    if (this.main.adminCount >= 1) {
      setTimeout(() => {
        this.main.adminCount = 0;
      }, 15000);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
