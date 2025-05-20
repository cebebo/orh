import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-fs-grundriss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-grundriss.component.html',
  styleUrl: './fs-grundriss.component.scss'
})
export class FsGrundrissComponent {

  main = inject(MainService);

  normal1 = 'assets/img/grundrisse-oben-haus1.png';
  hover1 = 'assets/img/grundrisse-oben-haus1_hover.png'; 

  normal2 = 'assets/img/grundrisse-oben-haus2.png';
  hover2 = 'assets/img/grundrisse-oben-haus2_hover.png'; 

  haus1o = 'assets/img/grundriss-haus1-oben.png';
  haus1u = 'assets/img/grundriss-haus1-unten.png';
  haus2o = 'assets/img/grundriss-haus2-oben.png';
  haus2u = 'assets/img/grundriss-haus2-unten.png';

  isHovered1 = false;
  isHovered2 = false;

  house:number = 1;
  deck:number = 0;
  showPopup = false;

}
