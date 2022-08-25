import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/security/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/security/components/sign-up/sign-up.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { WatchedListComponent } from './watched-list/watched-list.component';

const routes: Routes = [
  // { path: 'tuteur', loadChildren: () => import('./pages/tuteur/tuteur.module').then(m => m.TuteurModule) },
  // { path: 'enfants', loadChildren: () => import('./pages/enfants/enfants.module').then(m => m.EnfantsModule) },
  { path: '', component: LandingPageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'film/all', component: WatchedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
