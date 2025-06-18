import { Component, inject } from '@angular/core';
import { MainService } from '../../main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from '@angular/fire/auth';

@Component({
  selector: 'app-ad-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ad-password.component.html',
  styleUrl: './ad-password.component.scss'
})
export class AdPasswordComponent {

main = inject(MainService);
auth = inject(Auth);

oldPwd:string = '';
newPwd:string = '';
repPwd:string = '';

pwdSuccess = false;
pwdError = '';

async checkValidation() {
  if (
      this.oldPwd.length < 8 ||
      this.newPwd.length < 8 ||
      this.repPwd.length < 8
    ) {
      this.pwdError = 'Alle Felder müssen mind. 8 Zeichen haben.';
      return;
    }

    if (this.newPwd !== this.repPwd) {
      this.pwdError = 'Neues Passwort stimmt nicht mit der Wiederholung überein.';
      return;
    }

    const user = this.auth.currentUser;
    if (!user || !user.email) {
      this.pwdError = 'Keine gültige Anmeldung gefunden.';
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(user.email, this.oldPwd);
      await reauthenticateWithCredential(user, credential); // 🔐 alte Passwortprüfung
      await updatePassword(user, this.newPwd);              // ✅ neues Passwort setzen

      this.pwdSuccess = true;
      this.pwdError = '';
      this.erasePwds();
    } catch (error: any) {
      console.error('Fehler beim Passwortwechsel:', error);
      if (error.code === 'auth/wrong-password') {
        this.pwdError = 'Altes Passwort ist falsch.';
      } else if (error.code === 'auth/too-many-requests') {
        this.pwdError = 'Zu viele Versuche. Bitte später erneut versuchen.';
      } else {
        this.pwdError = 'Fehler beim Ändern des Passworts.';
      }
    }
  }


erasePwds() {
  this.oldPwd = '';
  this.newPwd = '';
  this.repPwd = '';
}

}
