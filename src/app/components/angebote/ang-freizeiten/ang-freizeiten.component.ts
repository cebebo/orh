import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MainService } from '../../main.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ang-freizeiten',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ang-freizeiten.component.html',
  styleUrl: './ang-freizeiten.component.scss'
})
export class AngFreizeitenComponent {

  main = inject(MainService);

  http = inject(HttpClient);

  validCheck = false;
  success = false;
  checkAgreement = false;

  anmeldung = {
    camp: "",
    date: "",
    firstName: "",
    lastName: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    email: "",
    birthday: "",
    age: "",
    gender: "",
    nationality: "",
    county: "",
    confession: "",
    info: "",
    perm_swim: "",
    perm_hike: "",
    perm_ski: "",
    perm_ind: "",
    perm_photo: "",
    swimskill: "",
    agreement: ""
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
  year: number = 2025;
  activeCamp = this.main.freizeiten[0];
  popup = false;
  popupContent = false;
  register: string = 'all';
  none = false;
  permInfo = false;
  infoText = "Info";
  sended = false;

  inputFName = false;
  inputLName = false;
  inputAdress = false;
  inputZip = false;
  inputCity = false;
  inputEmail = false;
  inputPhone = false;
  inputBirthday = false;



  chooseCamp(camp: any) {
    this.activeCamp = camp;
    this.popup = true;
    this.popupContent = true;
    this.fillDetailsInForm();
  }

  fillDetailsInForm() {

    this.anmeldung.camp = this.activeCamp.title;
    this.anmeldung.date = this.activeCamp.date;
    this.anmeldung.perm_hike = this.activeCamp.perm_hike;
    this.anmeldung.perm_ind = this.activeCamp.perm_ind;
    this.anmeldung.perm_photo = this.activeCamp.perm_photo;
    this.anmeldung.perm_ski = this.activeCamp.perm_ski;
    this.anmeldung.perm_swim = this.activeCamp.perm_swim;
  }

  changeBol(vari: number) {
    switch (vari) {
      case 1:
        this.anmeldung.perm_swim = this.switchValue(this.anmeldung.perm_swim);
        break;
      case 2:
        this.anmeldung.perm_hike = this.switchValue(this.anmeldung.perm_hike);
        break;
      case 3:
        this.anmeldung.perm_ski = this.switchValue(this.anmeldung.perm_ski);
        break;
      case 4:
        this.anmeldung.perm_ind = this.switchValue(this.anmeldung.perm_ind);
        break;
      case 5:
        this.anmeldung.perm_photo = this.switchValue(this.anmeldung.perm_photo);
        break;
      case 6:
        this.changePolicy();
        break;
    }
  }

  showInfo(v: number) {
    this.infoText = this.infos[v];
  }

  switchValue(perm: string) {
    if (perm == 'ja') { return 'nein' }
    else if (perm == 'nein') { return 'ja' }
    else return 'nein';
  }


  post = {
    endPoint: 'https://www.becker-christian.de/orh/bookfrzt.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted) {
      this.anmeldung.birthday = this.formatDateToDDMMYYYY(this.anmeldung.birthday);
      this.http.post(this.post.endPoint, this.post.body(this.anmeldung),
        { params: { '2f': this.anmeldung.email } })
        .subscribe({
          next: (response) => { },
          error: (error) => {
            console.error(error);
          },
          complete: () => { },
        });
      this.sended = true;
      this.popupContent = false;
      this.none = false;

      setTimeout(() => {
        this.anmeldung = {
          camp: "",
          date: "",
          firstName: "",
          lastName: "",
          address: "",
          zip: "",
          city: "",
          phone: "",
          email: "",
          birthday: "",
          age: "",
          gender: "",
          nationality: "",
          county: "",
          confession: "",
          info: "",
          perm_swim: "",
          perm_hike: "",
          perm_ski: "",
          perm_ind: "",
          perm_photo: "",
          swimskill: "",
          agreement: ""
        };
        this.sended = false
        this.popup = false;
      }, 5000);
    }
  }


  changePolicy() {
    this.checkAgreement = !this.checkAgreement;
    this.checkValidation();
  }


  calculateAge(birthday: string): void {
    if (!birthday) return;

    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    this.anmeldung.age = age.toString();
  }


  formatDateToDDMMYYYY(dateStr: string): string {
    if (!dateStr) return '';

    const date = new Date(dateStr);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Monate beginnen bei 0
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }


  correctCheck(title: string, val: boolean) {
    if (val) {
      switch (title) {
        case 'vorname': this.inputFName = true;
          break;
        case 'nachname': this.inputLName = true;
          break;
        case 'adresse': this.inputAdress = true;
          break;
        case 'plz': this.inputZip = true;
          break;
        case 'ort': this.inputCity = true;
          break;
        case 'email': this.inputEmail = true;
          break;
        case 'geb': this.inputBirthday = true;
          break;
        case 'tel': this.inputPhone = true;
          break;
        default: break;
      }
    } else {
      switch (title) {
        case 'vorname': this.inputFName = false;
          break;
        case 'nachname': this.inputLName = false;
          break;
        case 'adresse': this.inputAdress = false;
          break;
        case 'plz': this.inputZip = false;
          break;
        case 'ort': this.inputCity = false;
          break;
        case 'email': this.inputEmail = false;
          break;
        case 'geb': this.inputBirthday = false;
          break;
        case 'tel': this.inputPhone = false;
          break;
        default: break;
      }
    };
    this.checkVal();
  }


  checkVal() {
    if (this.inputFName && this.inputLName && this.inputAdress && this.inputZip && this.inputCity && this.inputBirthday && this.inputEmail && this.inputPhone && this.checkAgreement) {
      this.validCheck = true
    } else {
      this.validCheck = false
    }

    console.log('Ergebnis: ' + this.validCheck + ' und ' + this.checkAgreement);
  }



  checkValidation() {
    if (this.checkAgreement) {
      this.anmeldung.agreement = 'ja'
    } else {
      this.anmeldung.agreement = 'nein'
    }
    this.checkVal();
  }


}
