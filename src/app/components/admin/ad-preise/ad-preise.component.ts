import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-preise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-preise.component.html',
  styleUrl: './ad-preise.component.scss'
})
export class AdPreiseComponent {

main = inject(MainService);

}
