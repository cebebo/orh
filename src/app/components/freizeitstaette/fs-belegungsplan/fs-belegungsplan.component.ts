import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MainService } from '../../main.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-fs-belegungsplan',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './fs-belegungsplan.component.html',
  styleUrl: './fs-belegungsplan.component.scss'
})
export class FsBelegungsplanComponent {

  http = inject(HttpClient);
  main = inject(MainService);

  bookingData = {
    organisation: "",
    firstName: "",
    lastName: "",
    adressAdd: "",
    adress: "",
    zip: "",
    city: "",
    email: "",
    phone: "",
    message: "",
    from: "",
    to: "",
    amount: "",
    catering: ""
  }

  options = [
    [
      "Welches Freizeithaus?*",
      "Haus 1 (48 Betten)",
      "Haus 2 (40 Betten)",
      "Beide Häuser"
    ],
    [
      "Welche Verpflegung?*",
      "Selbstversorger",
      "Mit Verpflegung"
    ]
  ]

  optHouse = this.options[0][0];
  optCatering = this.options[1][0];
  popup = false;
  mailTest = true;
  dateFrom = new Date("2025-7-6");
  dateTo = new Date("2025-7-10");
  sended = false;
  checkPolicy = false;

  inputFName = false;
  inputLName = false;
  inputAdress = false;
  inputZip = false;
  inputCity = false;
  inputEmail = false;
  inputPhone = false;
  inputCatering = false;

  validCheck = false;

  post = {
    endPoint: 'https://www.becker-christian.de/orh/bookhouse.php',
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
      this.bookingData.from = this.formatDateToDDMMYYYY(this.bookingData.from);
      this.bookingData.to = this.formatDateToDDMMYYYY(this.bookingData.to);
      this.http.post(this.post.endPoint, this.post.body(this.bookingData),
        { params: { '2f': this.bookingData.email } })
        .subscribe({
          next: (response) => {
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => { }
        });
      this.sended = true;

      setTimeout(() => {
        this.bookingData = {
          organisation: "",
          firstName: "",
          lastName: "",
          adressAdd: "",
          adress: "",
          zip: "",
          city: "",
          email: "",
          phone: "",
          message: "",
          from: "",
          to: "",
          amount: "",
          catering: ""
        }
        this.sended = false
        this.popup = false;
      }, 5000);
    }
  }


  isBookingValid(): boolean {
    if (!this.bookingData.from || !this.bookingData.to) return false;

    const fromDate = new Date(this.bookingData.from);
    const toDate = new Date(this.bookingData.to);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Nur das Datum, keine Uhrzeit

    return fromDate >= today && toDate > fromDate;
  }


  isBookingInvalid(): any {
    return this.bookingData.from && this.bookingData.to && !this.isBookingValid();
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
        case 'phone': this.inputPhone = true;
          break;
        case 'catering': this.inputCatering = true;
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
        case 'phone': this.inputPhone = false;
          break;
        case 'catering': this.inputCatering = false;
          break;
        default: break;
      }
    };
    this.checkValidation();
  }

  changePolicy() {
    this.checkPolicy = !this.checkPolicy;
    this.checkValidation();
  }


  checkValidation() {
    if (this.inputFName && this.inputLName && this.inputAdress && this.inputZip && this.inputCity && this.inputEmail && this.inputCatering && this.inputPhone && this.checkPolicy) {
      this.validCheck = true;
    } else { this.validCheck = false; }
  }

}
