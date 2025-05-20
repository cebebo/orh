import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-ang-freizeiten',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ang-freizeiten.component.html',
  styleUrl: './ang-freizeiten.component.scss'
})
export class AngFreizeitenComponent {

main = inject(MainService);

anmeldung = {
    camp:"",
    date:"",
    firstName:"",
    lastName:"",
    address:"",
    zip:"",
    city:"",
    phone:"",
    email:"",
    birthday:"",
    age:"",
    gender:"",
    nationality:"",
    county:"",
    confession:"",
    info:"",
    permission_swim:true,
    permission_hike:true,
    permission_ski:true,
    permission_independence:true,
    permission_photo:true,
    swimskill:"",
    agreement:false
  };

optGender = [
  "Geschlecht",
  "Weiblich",
  "Männlich",
  "Divers"
]

optConfession = [
  "Konfession",
  "evangelisch",
  "röm. katholisch",
  "orthodox",
  "freikirchlich",
  "islamisch",
  "andere Konfession",
  "ohne Konfession"
]

optSwimskill = [
  "Schwimmerfahrung",
  "Nichtschwimmer",
  "Schwimmanfänger",
  "Schwimmer",
  "Rettungsschwimmer"
]

infos = [
  "Mein Kind darf bei Schwimmveranstaltungen teilnehmen.",
  "Mein Kind darf bei Bergtouren teilnehmen.",
  "Mein Kind darf beim Skifahren teilnehmen.",
  "Mein Kind darf sich nach Abmeldung bei der Freizeitleitung von der Freizeitgruppe entfernen.",
  "Ich willige ein, dass Bilder-/Videoaufnahmen, auf dem mein minderjähriges Kind während der Freizeitmaßnahme zu sehen ist, unentgeltlich im Freizeitprospekt und im Internet verwendet werden darf. Die Zustimmung ist unbefristet und schließt das Recht zur Bearbeitung der Bilder ein."
]

confession = this.optConfession[0];
gender = this.optGender[0];
swimSkill = this.optSwimskill[0];
year:number = 2025;
activeCamp = this.main.freizeiten[0];
popup = false;
register:string = 'all';
none = false;
permInfo = false;
infoText = "Info";

chooseCamp(camp:any) {
  this.activeCamp = camp;
  this.popup = true;   
}

changeBol(vari:number) {
  if (vari==1) { this.anmeldung.permission_swim = !this.anmeldung.permission_swim };
  if (vari==2) { this.anmeldung.permission_hike = !this.anmeldung.permission_hike };
  if (vari==3) { this.anmeldung.permission_ski = !this.anmeldung.permission_ski };
  if (vari==4) { this.anmeldung.permission_independence = !this.anmeldung.permission_independence };
  if (vari==5) { this.anmeldung.permission_photo = !this.anmeldung.permission_photo };
  if (vari==6) { this.anmeldung.agreement = !this.anmeldung.agreement };
}

showInfo(v:number) {
  this.infoText = this.infos[v];
} 


}
