import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-uebu-verein',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uebu-verein.component.html',
  styleUrl: './uebu-verein.component.scss'
})
export class UebuVereinComponent {

main = inject(MainService);

}
