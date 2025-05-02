import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fs-umgebung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-umgebung.component.html',
  styleUrl: './fs-umgebung.component.scss'
})
export class FsUmgebungComponent {


  weidenthal = [
    {
      "title": "Naturbadeweiher",
      "distance": "5 Minuten zu Fuß",
      "url": "www.weidenthal.de/badeweiher"
    },
    {
      "title": "Letterboxing: Schatzsuche mit Kompass",
      "distance": "3,5 Stunden (Rundwanderung)",
      "url": "www.letterboxing-germany.info"
    }
  ];

  citys = [
    {
      "city": "Neustadt an der Weinstraße",
      "distance": "18 km",
      "car": "20 Minuten",
      "train": "Direkte Zugverbindung",
      "attractions": ["Hambacher Schloss", "Weindörfer", "Kuckucksbähnel", "Bibelmuseum"],
      "url": "www.neustadt.eu"
    },
    {
      "city": "Kaiserslautern",
      "distance": "20 km",
      "car": "20 Minuten",
      "train": "Direkte Zugverbindung",
      "attractions": ["Gartenschau", "Zoo", "Pfalztheater", "Fritz-Walter-Stadion", "Diskos"],
      "url": "www.kaiserslautern.de"
    },
    {
      "city": "Bad Dürkheim",
      "distance": "20 km",
      "car": "22 Minuten",
      "train": "Umstieg in Neustadt/Weinstr. Hbf",
      "attractions": ["Riesenfass", "Burgruine Hardenburg", "Salinen"],
      "url": "www.bad-duerkheim.de"
    },
    {
      "city": "Speyer",
      "distance": "45 km",
      "car": "46 Minuten",
      "train": "Umstieg in Schifferstadt",
      "attractions": ["Dom", "Gedächtniskirche der Protestation", "Jüdisches Viertel", "Technikmuseum mit IMAX", "Sealife", "Rundfahrten auf dem Rhein"],
      "url": "www.speyer.de"
    }
  ];

  swimming = [
    {
      "name": "Salinarium",
      "distance": "22 km",
      "car": "25 Minuten",
      "train": "Umstieg in Neustadt/Weinstr. Hbf",
      "city": "Bad Dürkheim",
      "url": "www.salinarium.de"
    },
    {
      "name": "Monte Mare",
      "distance": "19 km",
      "car": "20 Minuten",
      "train": "Bus-Umstieg in Kaiserslautern Hbf",
      "city": "Kaiserslautern",
      "url": "www.monte-mare.de"
    },
    {
      "name": "La Ola",
      "distance": "41 km",
      "car": "41 Minuten",
      "train": "Bus-Umstieg in Neustadt/Weinstr. Hbf",
      "city": "Landau",
      "url": "www.la-ola.de"
    },
    {
      "name": "Miramar",
      "distance": "73 km",
      "car": "55 Minuten",
      "train": "Umstieg in Mannheim Hbf",
      "city": "Weinheim",
      "url": "www.miramar-bad.de"
    }
  ];

  more = [
    {
      "name": "Gartenschau Kaiserslautern",
      "city": "Kaiserslautern",
      "distance": "24 km",
      "car": "28 Minuten",
      "train": "Umstieg in Kaiserslautern Hbf",
      "attraction": "Naturpark",
      "url": "www.gartenschau-kl.de"
    },
    {
      "name": "Plopsaland (Holiday Park)",
      "city": "Haßloch",
      "distance": "36 km",
      "car": "40 Minuten",
      "train": "Direkte Zugverbindung (+Shuttlebus)",
      "attraction": "Freizeitpark",
      "url": "www.plopsaland.de"
    },
    {
      "name": "Kurpfalzpark",
      "city": "Wachenheim",
      "distance": "19 km",
      "car": "21 Minuten",
      "train": "Umstieg in Neustadt/Weinstr. Hbf und Deidesheim (Bus)",
      "attraction": "Wild- und Erlebnispark",
      "url": "www.kurpfalzpark.de"
    },
    {
      "name": "Kletterwald Tilu Adventure",
      "city": "Kaiserslautern",
      "distance": "20 km",
      "car": "22 Minuten",
      "train": "Bus-Umstieg in Kaiserslautern Hbf",
      "attraction": "Kletterpark",
      "url": "www.kletterwaldkaiserslautern.de"
    },
    {
      "name": "Fun Forest Kandel",
      "city": "Kandel",
      "distance": "54 km",
      "car": "51 Minuten",
      "train": "Umstieg in Neustadt/Weinstr. Hbf",
      "attraction": "Kletterpark",
      "url": "www.abenteuerpark-kandel.de"
    },
    {
      "name": "Draisinenbahn Südpfalz",
      "city": "Bornheim",
      "distance": "40 km",
      "car": "40 Minuten",
      "train": "Bus-Umstieg in Neustadt/Weinstr. Hbf und Landau",
      "attraction": "Radfahren auf Schienen",
      "url": "www.suedpfalz-draisine.de"
    }
  ];

  topic: number = 1;

  changeTopic(value: number) {
    this.topic = value;
  }

}
