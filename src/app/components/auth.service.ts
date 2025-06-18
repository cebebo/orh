import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { MainService } from './main.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private main = inject(MainService);

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    user(this.auth).subscribe(u => this.currentUserSubject.next(u));
    this.main.access = true;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then(result => {
        this.currentUserSubject.next(result.user);
        this.main.access = true; 
      });
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.currentUserSubject.next(null);
      this.main.access = false; 
    });
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  isLoggedIn() {
    return !!this.auth.currentUser;
  }
}
