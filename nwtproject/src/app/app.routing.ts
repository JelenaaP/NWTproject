import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ZgradeComponent } from './zgrade/zgrade.component';
import {StanoviComponent } from './stanovi/stanovi.component';
import { FirmeComponent } from './firme/firme.component';
import { ZgradaDetailComponent } from './zgrada-detail/zgrada-detail.component';
import { FirmaDetailComponent } from './firma-detail/firma-detail.component';
import { StanDetailComponent } from './stan-detail/stan-detail.component';
import { KorisnikDetailComponent } from './korisnik-detail/korisnik-detail.component';

const routes: Routes = [
  { path: 'zgrade', component: ZgradeComponent },
  {path: 'stanovi', component: StanoviComponent},
  {path: 'firme', component: FirmeComponent},
  {path: 'addZgrada', component:ZgradaDetailComponent},
  {path: 'editZgrada/:id', component:ZgradaDetailComponent},
  {path: 'firme', component: FirmeComponent},
  { path: 'editFirma/:id', component: FirmaDetailComponent },
  {path: 'addStan', component:StanDetailComponent},
  {path: 'editStan/:id', component:StanDetailComponent},
  {path: 'addKorisnik', component:KorisnikDetailComponent},
  {path: 'editKorisnik/:id', component:KorisnikDetailComponent},
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
