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

  // inputName = false;
  // inputEmail = false;
  // inputMessage = false;
  // validCheck = false;
  // success = false;

  // mailTest = false;

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

    mailTest = true;

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
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
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

  // checkValidation() {
  //   if (this.inputName && this.inputEmail && this.inputMessage) {
  //     this.validCheck = true;
  //   } else { this.validCheck = false; }
  // }


}
