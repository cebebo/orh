import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes),
    provideClientHydration(),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"orhaus-2f8b2","appId":"1:440972311859:web:36778f8966faec9415d246","storageBucket":"orhaus-2f8b2.firebasestorage.app","apiKey":"AIzaSyAAV6z-vIB3mFTCowjEnG5idfvnw98gPLk","authDomain":"orhaus-2f8b2.firebaseapp.com","messagingSenderId":"440972311859","measurementId":"G-6VSCGP5C2Z"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};