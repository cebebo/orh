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


  changeSite(num:number) {
    this.main.current = num;
    this.main.overlay = false;
  }

  noScroll(val:boolean) {
    if (val) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

}
