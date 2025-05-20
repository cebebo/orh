import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-freizeiten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-freizeiten.component.html',
  styleUrl: './ad-freizeiten.component.scss'
})
export class AdFreizeitenComponent {

main = inject(MainService);

}
