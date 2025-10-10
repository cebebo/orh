import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datenschutz-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './datenschutz-popup.component.html',
  styleUrl: './datenschutz-popup.component.scss'
})
export class DatenschutzPopupComponent {

main = inject(MainService);

accordion = 1; 

}
