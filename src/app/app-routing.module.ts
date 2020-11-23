import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetUpComponent } from "./set-up/set-up.component";
import { LoginComponent } from "./login/login.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { IndexComponent } from './make-errrand-folder/index/index.component';
import { ErrandDescSummaryComponent } from './errand-desc-summary/errand-desc-summary.component';
import { IntrestedErrandersComponent } from './errand-request-placed/intrested-erranders/intrested-erranders.component';
import { ErrandIndexComponent  } from "./errand-screen/errand-index/errand-index.component";
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ActiveErrandComponent } from './errand-screen/active-errand/active-errand.component';
import { ErrandDetailsComponent } from './errand-screen/errand-details/errand-details.component';
import { ErrandRunOrRequestedComponent } from './errand-screen/errand-run-or-requested/errand-run-or-requested.component';
import { AccountComponent } from './account/account.component';
import { UnboardingIndexComponent } from './unboarding/unboarding-index/unboarding-index.component';
import { GetStartedComponent } from './modal/get-started/get-started.component';

const redirectLoggedInToUser = () => redirectLoggedInTo(['user']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '', component: GetStartedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToUser }
  },
  { 
    path: 'signup', component: SetUpComponent
  },

  {
    path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToUser }
  },

  {
    path: 'user', component: HomeScreenComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'errand-request', component: IndexComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'errand-description-summary', component: ErrandDescSummaryComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'errand-request-placement', component: IntrestedErrandersComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'errands', component: ErrandIndexComponent
  },
  {
    path: 'active-errands', component: ActiveErrandComponent
  },
  {
    path: 'errand-run-by-me', component: ErrandRunOrRequestedComponent
  },
  {
    path: 'errand-requested-by-me', component: ErrandRunOrRequestedComponent
  },
  {
    path: 'errand-details/1', component: ErrandDetailsComponent
  },
  {
    path: 'account', component: AccountComponent
  },
  {
    path: 'welcome', component: UnboardingIndexComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToUser }
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
