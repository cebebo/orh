import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uebu-namen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uebu-namen.component.html',
  styleUrl: './uebu-namen.component.scss'
})
export class UebuNamenComponent implements OnInit {

  nextInfo: number = 1;

  ngOnInit(): void {
    this.rotateInfo();
  }


  rotateInfo() {
    // setInterval(() => {
    //     this.nextInfo++;
    //     if (this.nextInfo == 8) { this.nextInfo = 1 }
    // }, 2000);
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
