import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  

  constructor() {
    
   }

   current:number = 1;
   overlay = false;
   mobileMenu = false;

   adminCount:number = 0;

   noScroll(val:boolean) {
    if (val) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

}

