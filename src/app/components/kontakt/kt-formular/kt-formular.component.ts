import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainService } from '../../main.service';

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
  sended = false;


  http = inject(HttpClient);
  main = inject(MainService);

  contactData = {
    name: "",
    email: "",
    message: ""
  }


  post = {
    endPoint: 'https://www.becker-christian.de/orh/sndml.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  correctCheck(title: string, val: boolean) {
    if (val) {
      switch (title) {
        case 'name': this.inputName = true;
          break;
        case 'email': this.inputEmail = true;
          break;
        case 'message': this.inputMessage = true;
          break;
        default: break;
      }
    } else {
      switch (title) {
        case 'name': this.inputName = false;
          break;
        case 'email': this.inputEmail = false;
          break;
        case 'message': this.inputMessage = false;
          break;
        default: break;
      }
    } ''
    this.checkValidation();
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.checkPolicy) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData),
        { params: { '2f': this.contactData.email } })
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
        this.contactData = {
          name: "",
          email: "",
          message: ""
        }
        this.checkPolicy = false
        this.sended = false
      }, 5000);
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
