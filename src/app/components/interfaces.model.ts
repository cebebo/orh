export interface NewsItem {
  id?: string;
  head: string;
  body: string;
  edit: boolean;
  temp?: {
    head: string;
    body: string;
  };
}

export interface FreizeitItem {
  id?: string;
  title: string;
  category: string;
  date: string;
  location: string;
  age: string;
  price: string;
  description: string;
  img: string;
  edit: boolean;
  temp?: {
    title: string;
    category: string;
    date: string;
    location: string;
    age: string;
    price: string;
    description: string;
    img: string;
  }
}

export interface VorstandItem {
  id?: string;
  amt: string;
  name: string;
  city: string;
  enabled: boolean;
  temp?: {
    amt: string;
    name: string;
    city: string;
  };
}

// export interface SVPreiseItem {
//   year: number;
//   to60kids: number;
//   to60adults: number;
//   up60kids: number;
//   up60adults: number;
//   cleanUp: number;
//   sheets: number;
//   towelBig: number;
//   towelSmall: number;
//   apron: number;
//   teaTowel: number;
//   dishcloth: number;
//   active: number;
//   temp?: {
//     year: number;
//     to60kids: number;
//     to60adults: number;
//     up60kids: number;
//     up60adults: number;
//     cleanUp: number;
//     sheets: number;
//     towelBig: number;
//     towelSmall: number;
//     apron: number;
//     teaTowel: number;
//     dishcloth: number;
//     active: number
//   }
// }

// export interface VPPreiseItem {
//   year: number;
//   kids: number;
//   teens: number;
//   adults: number;
//   counselor: number;
//   seniorAdults: number;
//   singleRoom: number;
//   doubleRoom: number;
//   singleNight: number;
//   churchGroup: number;
//   coffeeCakeKids: number;
//   coffeeCakeTeens: number;
//   coffeeCakeAdults: number;
//   grill: number;
//   kitchenDuty: number;
//   sheets: number;
//   towelBig: number;
//   towelSmall: number
//   temp?: {
//     year: number;
//     kids: number;
//     teens: number;
//     adults: number;
//     counselor: number;
//     seniorAdults: number;
//     singleRoom: number;
//     doubleRoom: number;
//     singleNight: number;
//     churchGroup: number;
//     coffeeCakeKids: number;
//     coffeeCakeTeens: number;
//     coffeeCakeAdults: number;
//     grill: number;
//     kitchenDuty: number;
//     sheets: number;
//     towelBig: number;
//     towelSmall: number
//   }
// }

export interface PreiseItem {
  id?: string;
  year: number;
  kids: number;
  teens: number;
  adults: number;
  counselor: number;
  seniorAdults: number;
  singleRoom: number;
  doubleRoom: number;
  singleNight: number;
  churchGroup: number;
  coffeeCakeKids: number;
  coffeeCakeTeens: number;
  coffeeCakeAdults: number;
  grill: number;
  kitchenDuty: number;
  sheets: number;
  towelBig: number;
  towelSmall: number
  to60kids: number;
  to60adults: number;
  up60kids: number;
  up60adults: number;
  cleanUp: number;
  apron: number;
  teaTowel: number;
  dishcloth: number;
  active: number;
  temp?: {
    id?: string;
    year: number;
    kids: number;
    teens: number;
    adults: number;
    counselor: number;
    seniorAdults: number;
    singleRoom: number;
    doubleRoom: number;
    singleNight: number;
    churchGroup: number;
    coffeeCakeKids: number;
    coffeeCakeTeens: number;
    coffeeCakeAdults: number;
    grill: number;
    kitchenDuty: number;
    sheets: number;
    towelBig: number;
    towelSmall: number;
    to60kids: number;
    to60adults: number;
    up60kids: number;
    up60adults: number;
    cleanUp: number;
    apron: number;
    teaTowel: number;
    dishcloth: number;
    active: number
  }
}