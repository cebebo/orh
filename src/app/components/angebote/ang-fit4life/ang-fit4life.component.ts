import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-fit4life',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ang-fit4life.component.html',
  styleUrl: './ang-fit4life.component.scss'
})
export class AngFit4lifeComponent {

register:string = 'forest';

}
