import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-ang-fit4life',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ang-fit4life.component.html',
  styleUrl: './ang-fit4life.component.scss'
})
export class AngFit4lifeComponent {

register:string = 'forest';

main = inject(MainService);

}
