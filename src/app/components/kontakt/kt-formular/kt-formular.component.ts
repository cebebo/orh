import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kt-formular',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './kt-formular.component.html',
  styleUrl: './kt-formular.component.scss'
})
export class KtFormularComponent {

  checkPolicy = false;
  inputName = false;
  inputEmail = false;
  inputMessage = false;
  validCheck = false;
  success = false;

  // mailTest = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

    mailTest = false;

  post = {
    endPoint: 'https://www.becker-christian.de/sndml.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

//   onSubmit(ngForm: NgForm) {
//   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
//     const url = `${this.post.endPoint}?2f=${encodeURIComponent(this.contactData.email)}`;
//     this.http.post(url, this.post.body(this.contactData), this.post.options)
//       .subscribe({
//         next: (response) => {
//           console.log('Erfolgreich versendet:', response);
//           ngForm.resetForm();
//         },
//         error: (error) => {
//           console.error('Fehler beim Senden:', error);
//         },
//         complete: () => console.info('Sendevorgang abgeschlossen'),
//       });
//   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
//     console.log('Klappt!');
//     ngForm.resetForm();
//   }
// }

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {

  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  //     console.log('Klappt!');
  //     ngForm.resetForm();
  //   }
  // }

  // checkValidation() {
  //   if (this.inputName && this.inputEmail && this.inputMessage) {
  //     this.validCheck = true;
  //   } else { this.validCheck = false; }
  // }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.checkPolicy) {

      this.http.post(this.post.endPoint, this.post.body(this.contactData),
        { params: { '2f': this.contactData.email } })
        .subscribe({
          next: (response) => {
            this.success = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info(''),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.checkPolicy) {
      ngForm.resetForm();
      this.success = true;
      setTimeout(() => { this.success = false; }, 2000);
      this.checkPolicy = false;
      this.validCheck = false;
    }
  }

  changePolicy() {
    this.checkPolicy = !this.checkPolicy;
    this.checkValidation();
  }

  checkValidation() {
    if (this.inputName && this.inputEmail && this.inputMessage && this.checkPolicy) {
      this.validCheck = true;
    } else { this.validCheck = false; }
  }


}
