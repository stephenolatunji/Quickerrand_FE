import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetUpComponent } from './set-up/set-up.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotifyComponent } from './notify/notify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ErrandRequestComponent } from './make-errrand-folder/errand-request/errand-request.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MakeErrandComponent } from './make-errrand-folder/make-errand/make-errand.component';
import { IndexComponent } from './make-errrand-folder/index/index.component';
import { MakeErrandPageThreeComponent } from './make-errrand-folder/make-errand-page-three/make-errand-page-three.component';
import { MakeErrandPageFourComponent } from './make-errrand-folder/make-errand-page-four/make-errand-page-four.component';
import { MakeErrandPageFiveComponent } from './make-errrand-folder/make-errand-page-five/make-errand-page-five.component';
import { ErrandDescSummaryComponent } from './errand-desc-summary/errand-desc-summary.component';
import { IntrestedErrandersComponent } from './errand-request-placed/intrested-erranders/intrested-erranders.component';
import { ShowInrtestedErrandersListComponent } from './errand-request-placed/show-inrtested-erranders-list/show-inrtested-erranders-list.component';
import { ErrandDescriptionExampleComponent } from './modal/errand-description-example/errand-description-example.component';
import { PayErrandFeeComponent } from './modal/pay-errand-fee/pay-errand-fee.component';
import { PaymentSuccessfulComponent } from './modal/payment-successful/payment-successful.component';
import { ErrandeeProfileComponent } from './modal/errandee-profile/errandee-profile.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './make-errrand-folder/map/map.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ErrandIndexComponent } from './errand-screen/errand-index/errand-index.component';
import { ActiveErrandComponent } from './errand-screen/active-errand/active-errand.component';
import { RunByMeComponent } from './errand-screen/run-by-me/run-by-me.component';
import { ErrandDetailsComponent } from './errand-screen/errand-details/errand-details.component';
import { ErrandRunOrRequestedComponent } from './errand-screen/errand-run-or-requested/errand-run-or-requested.component';
import { AccountComponent } from './account/account.component';
import { UnboardingStageOneComponent } from './unboarding/unboarding-stage-one/unboarding-stage-one.component';
import { UnboardingStageTwoComponent } from './unboarding/unboarding-stage-two/unboarding-stage-two.component';
import { UnboardingIndexComponent } from './unboarding/unboarding-index/unboarding-index.component';
import { UnboardingStageThreeComponent } from './unboarding/unboarding-stage-three/unboarding-stage-three.component';
import { GetStartedComponent } from './modal/get-started/get-started.component';

@NgModule({
  declarations: [
    AppComponent,
    SetUpComponent,
    NotifyComponent,
    FooterComponent,
    HomeScreenComponent,
    ErrandRequestComponent,
    MakeErrandComponent,
    IndexComponent,
    MakeErrandPageThreeComponent,
    MakeErrandPageFourComponent,
    MakeErrandPageFiveComponent,
    ErrandDescSummaryComponent,
    IntrestedErrandersComponent,
    ShowInrtestedErrandersListComponent,
    ErrandDescriptionExampleComponent,
    PayErrandFeeComponent,
    PaymentSuccessfulComponent,
    ErrandeeProfileComponent,
    LoginComponent,
    MapComponent,
    ErrandIndexComponent,
    ActiveErrandComponent,
    RunByMeComponent,
    ErrandDetailsComponent,
    ErrandRunOrRequestedComponent,
    AccountComponent,
    UnboardingStageOneComponent,
    UnboardingStageTwoComponent,
    UnboardingIndexComponent,
    UnboardingStageThreeComponent,
    GetStartedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
