import { Component, OnInit } from '@angular/core';
import { ServerService } from "../service/server.service";
import { NotifyComponent } from "../notify/notify.component";
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.css']
})

export class SetUpComponent implements OnInit {
  type: string = 'password'; 
  emailErr: boolean = false; chekboxErr: boolean;
  mark1: boolean = false; mark2 : boolean = false; mark3 : boolean = false;
  storeCredential;

  public user = { 
    completed: null, 
    email: null,
    firstname: null,
    lastname: null,
    password: null,
    mobile: null
  }; 

  public notification_msg = { 
    msg: null, 
    success: null 
  };

  indexSelected;
  newUserCollection: any;
  newUser: any;

  constructor(
    private server: ServerService, 
    public notifier: NotifyComponent, 
    private rout: Router,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
    ) {
      this.newUserCollection = this.firestore.collection('Users');
      this.newUser = this.newUserCollection.valueChanges();
     }

  ngOnInit(): void {
  }

  toggleType() {
    this.type = document.getElementById("password").getAttribute("type") == 'password' ? 'text' : 'password';
    document.getElementById("password").setAttribute("type", this.type);
  }

  submit(val){
    this.emailErr = false;
    switch (val) {
      case 'email':
        if(this.user.email !== null && this.user.email !== '') {
          this.auth.fetchSignInMethodsForEmail(this.user.email).then(data => {
            if(data.length == 0) {
                this.emailErr = false;
                // contd
                this.indexSelected = '1';
              }
              else {
                // err
                this.emailErr = true;
              }
          })
          .catch(err => console.log(err))

        }
        
        break;
      case 'name': 
        if(this.user.firstname!==null && this.user.lastname!==null && this.user.mobile!==null && this.user.firstname!=='' && this.user.lastname!=='' && this.user.mobile!==''){
          this.indexSelected = '2';
        }

      case 'all':

        if(this.user.completed) {
          
          this.notifier.show();
          // if a field is empty
          if( this.mark1 == false || this.mark2 == false || this.mark3 == false || this.user.email == null || this.user.firstname == null || this.user.lastname == null || this.user.mobile == null || this.user.password == null) {
            this.notification_msg = { msg: "Please fill up the input boxes correctly!", success: false };
            setTimeout(() => {
              this.notifier.hide();
            }, 3500);    
          }

          // if any field not empty
          else {
            
            this.notification_msg = { msg: "Registration in Progress...", success: false };
            this.runSaveScript()
            
          }

          }


        else {
          this.chekboxErr = true;
        }

      default:
        break;
    }

    
  }

  checkPwdValid() {
    this.mark1 = false;
    this.mark2 = false;
    this.mark3 = false;
    const pattern1 = /[a-z]/g;
    const pattern2 = /[A-Z]/g;
    const pattern3 = /[0-9]/g;
    const pattern4 = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g;
    const res1 = this.user.password?.match(pattern1);
    const res2 = this.user.password?.match(pattern2);
    const res3 = this.user.password?.match(pattern3);
    const res4 = this.user.password?.match(pattern4);

    if (this.user.password?.length >= 8) {
      this.mark2 = true
    };
    if( res1?.length > 0 && res2?.length > 0) {
      this.mark1 = true
    };
    if( res3?.length > 0 || res4?.length > 0) {
      this.mark3 = true
    };
  }

  // credential Storage
  public runSaveScript() {
    this.storeCredential = {
      firstname: this.user.firstname,
      lastname: this.user.lastname,
      mobile: this.user.mobile,
      email: this.user.email
    };
    
    this.newUserCollection.add(this.storeCredential);
      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        this.notification_msg = { msg: "Registration Successfull!", success: true };
        setTimeout(() => {
          this.notifier.hide();
          this.rout.navigate(['login'])
        }, 2500);    
      })
      .catch(() => {
        this.notification_msg = { msg: "Registration Failed!", success: false };
        setTimeout(() => {
          this.notifier.hide();
        }, 2500);   
      })       
  }

}