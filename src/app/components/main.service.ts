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

}

