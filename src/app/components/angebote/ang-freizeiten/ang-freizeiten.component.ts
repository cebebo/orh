import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-freizeiten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ang-freizeiten.component.html',
  styleUrl: './ang-freizeiten.component.scss'
})
export class AngFreizeitenComponent {

freizeiten = [
  {
    "title":"Osterfreizeit",
    "category":"kids",
    "date":"21. – 26.04.2025",
    "location":"Weidenthal",
    "age":"8 – 12",
    "price":"177",
    "description":"6 Tage voller Erlebnisse erwarten dich bei uns auf der Osterfreizeit. Du wirst eine spannende Geschichte aus der Bibel hören, spielen, basteln, singen und auch sportlich aktiv sein. Wir freuen uns, wenn Du dabei bist und eine super Ferienzeit gemeinsam mit anderen Kindern und den Mitarbeitenden erlebst.",
    "img":"kids_1.jpg"
  },
  {
    "title":"JULEICA-Schulung",
    "category":"education",
    "date":"24. - 29.05.2025",
    "location":"Weidenthal",
    "age":"ab 14",
    "price":"135",
    "description":"Wir machen Dich fit für die Arbeit mit Kindern und Jugendarbeit. In sechs Tagen werden Dir Basics und Skills der Jugendarbeit vermittelt. Du lernst Neues über Dich selbst und die Jugendarbeit. Du beschäftigst Dich mit Deiner Rolle als Vorbild und Leiter, lernst Spiele anzuleiten und in kreativer Weise biblische Geschichten zu erzählen. Dazu beleuchten wir Hintergründe und probieren verschiedene Dinge vor Ort aus. Neben allem Lernen werden wir als Gruppe zusammenwachsen, gemeinsam essen, spielen, lachen, Fragen stellen und Freizeit genießen. Bist du dabei? Mach Dich stark für Deine Mitmenschen!",
    "img":"edu_.jpg"
  },
  {
    "title":"Sommerfreizeit",
    "category":"kids",
    "date":"02. – 09.08.2025",
    "location":"Weidenthal",
    "age":"8 – 12",
    "price":"208",
    "description":"Es ist Sommer und das wollen wir in vollen Zügen gemeinsam mit dir genießen. Auf unserem großen Gelände wollen wir viel draußen sein. Basteln, Freunde kennenlernen, gemeinsam mit anderen Zeit verbringen, Geschichten über Gott und die Welt hören, schaukeln, essen, spannende Aktionen erleben und noch mehr erwartet dich bei der Sommerfreizeit. Bist du dabei?",
    "img":"kids_2.jpg"
  },
  {
    "title":"Sport- und Kreativfreizeit",
    "category":"kids",
    "date":"19. – 25.10.2025",
    "location":"Weidenthal",
    "age":"8 – 12",
    "price":"198",
    "description":"Auch dieses Jahr gibt es wieder die Sport- und Kreativfreizeit. In den Herbstferien hast du bei uns die Möglichkeit, gemeinsam mit anderen Kindern Sport zu machen, Geländespiele zu erleben, kreative Angebote auszuprobieren oder zwischendurch einfach mal entspannt Spiele zu spielen und spannende Geschichten aus der Bibel zu hören. Natürlich gibt es auch Zeiten, um einfach mal entspannt die Seele baumeln zu lassen. Wir freuen uns, wenn wir gemeinsam mit dir eine schöne Zeit verbringen.",
    "img":"kids_3.jpg"
  },
  {
    "title":"Jugendfreizeit ",
    "category":"teens",
    "date":"19 – 25.10.2025",
    "location":"Weidenthal",
    "age":"13 – 15",
    "price":"205",
    "description":"Du willst unvergessliche Ferien erleben? Dann komm in den Herbstferien zur Jugendfreizeit ins Otto-Riethmüller-Haus. Hier kannst du neue Leute kennenlernen, Zeit mit Freunden verbringen, tiefe Gespräche über Gott und die Welt führen und coole Aktionen erleben. Spiele, Aktionen, Bibelarbeiten und Begegnungsmöglichkeiten werden von den Mitarbeitenden für dich vorbereitet. Wir freuen uns auf dich!",
    "img":"teens_.jpg"
  },
];

year:number = 2025;
activeCamp = this.freizeiten[0];
popup = false;
register:string = 'all';
none = false;

chooseCamp(camp:any) {
  this.activeCamp = camp;
  this.popup = true;   
}


}
