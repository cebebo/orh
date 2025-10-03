import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FreizeitstaetteComponent } from './components/freizeitstaette/freizeitstaette/freizeitstaette.component';
import { AngeboteComponent } from './components/angebote/angebote/angebote.component';
import { UeberunsComponent } from './components/ueberuns/ueberuns/ueberuns.component';
import { KontaktComponent } from './components/kontakt/kontakt/kontakt.component';
import { ImprintComponent } from './components/shared/imprint/imprint.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { DatenschutzComponent } from './components/shared/datenschutz/datenschutz.component';
import { GrundsatzComponent } from './components/shared/grundsatz/grundsatz.component';
import { BedingungenComponent } from './components/shared/bedingungen/bedingungen.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'freizeitstaette', component: FreizeitstaetteComponent },
    { path: 'angebote', component: AngeboteComponent },
    { path: 'ueberuns', component: UeberunsComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'impressum', component: ImprintComponent },
    { path: 'datenschutz', component: DatenschutzComponent },
    { path: 'grundsatz', component: GrundsatzComponent },
    { path: 'bedingungen', component: BedingungenComponent },
    { path: 'admin', component: AdminComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  });
