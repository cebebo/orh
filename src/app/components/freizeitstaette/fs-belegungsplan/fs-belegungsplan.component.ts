import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MainService } from '../../main.service';


@Component({
  selector: 'app-fs-belegungsplan',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    house: "",
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
  dateFrom = new Date("2025-07-05");
  dateTo = new Date("2025-10-07");

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.bookingData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
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
  

}
