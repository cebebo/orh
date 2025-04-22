import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FreizeitstaetteComponent } from './components/freizeitstaette/freizeitstaette/freizeitstaette.component';
import { AngeboteComponent } from './components/angebote/angebote/angebote.component';
import { UeberunsComponent } from './components/ueberuns/ueberuns/ueberuns.component';
import { KontaktComponent } from './components/kontakt/kontakt/kontakt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'freizeitstaette', component: FreizeitstaetteComponent },
    { path: 'angebote', component: AngeboteComponent },
    { path: 'ueberuns', component: UeberunsComponent },
    { path: 'kontakt', component: KontaktComponent },
];
