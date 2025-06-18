import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-kt-anreise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kt-anreise.component.html',
  styleUrl: './kt-anreise.component.scss'
})
export class KtAnreiseComponent {

register:number = 1;

main = inject(MainService);

}
