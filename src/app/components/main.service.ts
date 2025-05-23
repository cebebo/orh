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

// 'JuSteFra@0rh'

   admPs = '123'
   pwInput = '';
   access = true;
   admSection = 1;

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

news = [
    {
      "head": "Nächste Freizeit:",
      "body": "02.-09.08.2025 - Sommerfreizeit für Kinder (8-12 Jahre)",
      "edit": false
    },
    {
      "head": "Neue Webseite",
      "body": "Die neue ORH-Webseite ist nun endlich online",
      "edit": false
    },
    {
      "head": "Virtueller Rundgang",
      "body": "NEU: Erkunden Sie unsere Einrichtung in 360 Grad!",
      "edit": false
    },
    {
      "head": "Freizeitanmeldung",
      "body": "Ab sofort können Sie Ihre Kinder online zu unseren Freizeiten anmelden",
      "edit": false
    },
    {
      "head": "Hausbuchung",
      "body": "Jetzt können Sie unser Haus über unsere Webseite anfragen.",
      "edit": false
    }
  ]

preiseSV = [
    {
      "year": 2025,
      "to60kids": 1050.00,
      "to60adults": 1560.00,
      "up60kids": 17.50,
      "up60adults": 26.00,
      "cleanUp": 450.00,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00,
      "apron": 2.50,
      "teaTowel": 1.00,
      "dishcloth": 0.50
    },
    {
      "year": 2026,
      "to60kids": 1110.00,
      "to60adults": 1620.00,
      "up60kids": 18.50,
      "up60adults": 27.00,
      "cleanUp": 500.00,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00,
      "apron": 2.50,
      "teaTowel": 1.00,
      "dishcloth": 0.50
    }
  ];

  preiseVP = [
    {
      "year": 2025,
      "kids": 35.80,
      "teens": 38.80,
      "adults": 44.00,
      "counselor": 51.00,
      "seniorAdults": 57.51,
      "singleRoom": 7.00,
      "doubleRoom": 4.00,
      "singleNight": 4.00,
      "churchGroup": 2.00,
      "coffeeCakeKids": 4.50,
      "coffeeCakeTeens": 5.00,
      "coffeeCakeAdults": 5.50,
      "grill": 2.50,
      "kitchenDuty": 2.50,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00
    },
    {
      "year": 2026,
      "kids": 37.60,
      "teens": 40.60,
      "adults": 46.00,
      "counselor": 53.50,
      "seniorAdults": 60.31,
      "singleRoom": 7.00,
      "doubleRoom": 4.00,
      "singleNight": 4.00,
      "churchGroup": 2.00,
      "coffeeCakeKids": 4.50,
      "coffeeCakeTeens": 5.00,
      "coffeeCakeAdults": 5.50,
      "grill": 2.50,
      "kitchenDuty": 2.50,
      "sheets": 7.50,
      "towelBig": 2.50,
      "towelSmall": 2.00
    }
  ];

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

  
   noScroll(val:boolean) {
    if (val) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }

}

