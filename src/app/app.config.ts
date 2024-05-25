import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"contacts-fd2d4","appId":"1:455894399079:web:1f27298b965a90aaa33cc2","storageBucket":"contacts-fd2d4.appspot.com","apiKey":"AIzaSyD6JYQ4SaGJ5QX4rjJSzP9v_GBrDpUnHNk","authDomain":"contacts-fd2d4.firebaseapp.com","messagingSenderId":"455894399079","measurementId":"G-GPHNFFVYLR"})), provideFirestore(() => getFirestore())]
};
