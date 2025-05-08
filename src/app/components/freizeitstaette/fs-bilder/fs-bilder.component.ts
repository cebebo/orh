import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fs-bilder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fs-bilder.component.html',
  styleUrl: './fs-bilder.component.scss'
})
export class FsBilderComponent implements OnInit {

  house1: any = [];
  house2: any = [];
  outside: any = [];
  chosen = 0;

  gallerys = [10, 19, 9];

  screenPic = {
    id: 0,
    img: 'I1.jpg'
  };
  num = 0;

  subtitle = [
    [
      "Luftaufnahme ORH-Gelände",
      "Luftaufnahme Hauptgebäude (Haus 1)",
      "Beide Freizeithäuser mit Außengelände",
      "Luftaufnahme Nebengebäude (Haus 2)",
      "Schaukel und Klettergerüst auf der Spielewiese",
      "Grillhütte (seitlich)",
      "Grillhütte (von vorne)",
      "Grillhütte (innen)",
      "Geländeansicht vom Wald aus",
      "Hauptgebäude (Froschperspektive)"
    ],
    [
      "Foyer - Sitzecke",
      "Foyer - Blick von der Treppe",
      "Foyer - von oben",
      "Foyer - Treppe, Kicker und Kiosk-Automat",
      "Speisesaal im Obergeschoss",
      "Speisesaal",
      "Vierer-Zimmer - Eingang",
      "Vierer-Zimmer innen",
      "Nasszelle in jedem Zimmer mit Dusche und WC",
      "Behindertengerechte Sechser-Zimmer im Erdgeschoss",
      "Sechser-Zimmer mit Rampe gut mit Rollstühlen erreichbar",
      "Zwei Sechser-Zimmer innen",
      "Sechser-Zimmer mit eigenem Ausgang zur Rampe",
      "Nasszelle der Sechser-Zimmer mit behindertengerechter Dusche und WC",
      "Kleiner Seminarraum im Erdgeschoss",
      "Küche - Eingang",
      "Küche - Spülbereich",
      "Küche - Kochbereich",
      "Küche - Kühlschränke"
    ],
    [
      "Clubraum",
      "Großer Seminarraum mit Whiteboard und Leinwand",
      "Mehrzweckraum für Gruppen-Aktionen",
      "Mehrzweckraum mit Tischtennisplatte",
      "Kreativraum",
      "Langer Flur im Obergeschoss",
      "Vierer-Zimmer - Eingang",
      "Vierer-Zimmer - innen",
      "Nasszelle mit Dusche und WC in jedem Zimmer"
    ]
  ]

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      for (let u = 1; u < this.gallerys[i] + 1; u++) {
        const image = {
          id: u - 1,
          img: `${i === 1 ? 'H' : i === 2 ? 'N' : 'I'}${u}.jpg`
        };
        if (i === 0) this.outside.push(image);
        else if (i === 1) this.house1.push(image);
        else if (i === 2) this.house2.push(image);
      }
    }
  }

  changePic(direction:string) {
    let album;
    if(this.chosen == 0) { album = this.outside }
    else if(this.chosen == 1) { album = this.house1 }
    else { album = this.house2 }
    if(direction == 'forward') {
      if (album[this.screenPic.id + 1]) {
        this.screenPic = album[this.screenPic.id + 1]
      } else { this.screenPic = album[0] }
    }
    if(direction == 'back') {
      if (album[this.screenPic.id - 1]) {
        this.screenPic = album[this.screenPic.id - 1]
      } else { this.screenPic = album[album.length - 1] }
    }
  }

}
