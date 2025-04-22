import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kt-anreise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kt-anreise.component.html',
  styleUrl: './kt-anreise.component.scss'
})
export class KtAnreiseComponent {

register:number = 1;

}
