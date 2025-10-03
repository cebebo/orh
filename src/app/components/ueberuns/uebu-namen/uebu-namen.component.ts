import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-uebu-namen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uebu-namen.component.html',
  styleUrl: './uebu-namen.component.scss'
})
export class UebuNamenComponent implements OnInit {

  nextInfo: number = 1;
  autoRotate: boolean = false;
  main = inject(MainService);

  ngOnInit(): void {
    this.rotateInfo();
  }

  changeAutoRotate() {
    this.autoRotate = !this.autoRotate;
    this.rotateInfo()
  }

  rotateInfo() {
    if (this.autoRotate) {
      setTimeout(() => {
        if (this.autoRotate) {
          this.nextInfo++;
          if (this.nextInfo == 8) { this.nextInfo = 1 }
          this.rotateInfo();
        }
      }, 15000);

    }
  }

  changeInfo(direction: string) {
    if (direction == 'minus') {
      this.nextInfo--;
      if (this.nextInfo == 0) { this.nextInfo = 7 }
    }
    if (direction == 'plus') {
      this.nextInfo++;
      if (this.nextInfo == 8) { this.nextInfo = 1 }
    }
  }


}
