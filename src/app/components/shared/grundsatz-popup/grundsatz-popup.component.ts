import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-grundsatz-popup',
  standalone: true,
  imports: [],
  templateUrl: './grundsatz-popup.component.html',
  styleUrl: './grundsatz-popup.component.scss'
})
export class GrundsatzPopupComponent {

main = inject(MainService);

}
