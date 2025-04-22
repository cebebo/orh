import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uebu-verein',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uebu-verein.component.html',
  styleUrl: './uebu-verein.component.scss'
})
export class UebuVereinComponent {

vorstand = [
  {
    "amt":"1. Vorsitzender",
    "name":"Pascal Wilking",
    "city":"Kaiserslautern"
  },
  {
    "amt":"2. Vorsitzende",
    "name":"Marlies Franck",
    "city":"Winnweiler"
  },
  {
    "amt":"Kassenwartin",
    "name":"Kerstin Klein",
    "city":"Trippstadt"
  },
  {
    "amt":"Schriftführer",
    "name":"Harald Dröge",
    "city":"Ottersheim"
  },
  {
    "amt":"Beisitzerin",
    "name":"Annika Klein",
    "city":"Kaiserslautern"
  }
]

}
