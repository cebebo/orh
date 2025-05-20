import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-vorstand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-vorstand.component.html',
  styleUrl: './ad-vorstand.component.scss'
})
export class AdVorstandComponent {

main = inject(MainService);

}
