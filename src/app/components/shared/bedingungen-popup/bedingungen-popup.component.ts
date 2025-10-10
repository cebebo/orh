import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';


@Component({
  selector: 'app-bedingungen-popup',
  standalone: true,
  imports: [],
  templateUrl: './bedingungen-popup.component.html',
  styleUrl: './bedingungen-popup.component.scss'
})
export class BedingungenPopupComponent {

main = inject(MainService);

}
