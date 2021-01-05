import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../service/server.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('firstname') fn: ElementRef
  @ViewChild('username') un: ElementRef
  @ViewChild('email') em: ElementRef
  @ViewChild('mobile') mb: ElementRef
  @ViewChild('whatsapp') wa: ElementRef

  public user = {
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    mobile: null,
    whatsapp: null,
    image: null
  };

  public readonly = {
    firstname: true,
    lastname: true,
    username: true,
    email: true,
    mobile: true,
    whatsapp: true
  }

  public editMode: boolean = false; emailErr: boolean = false; usernameErr: boolean = false;

  constructor(private server: ServerService, private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.fetchData);
    this.setData();
  }  

  public get fetchData() : any {
    return this.server.store
  }

  public setData() {
    setTimeout(() => {      
      this.user.firstname = this.fetchData?.firstname;
      this.user.lastname = this.fetchData?.lastname;
      this.user.username = this.fetchData?.username;
      this.user.email = this.fetchData?.email;
      this.user.mobile = this.fetchData?.mobile;
      this.user.whatsapp = this.fetchData?.whatsapp;
      this.user.image = this.fetchData?.image;
    }, 1000);
  }

  edit(val) {
    this.editMode = true;
    switch (val) {
      case 'name':
        this.creatBlockDisplay();
        this.creatReadOnly();
        this.readonly.firstname = this.readonly.lastname = false;
        this.fn.nativeElement.focus();
        document.getElementById('editName').style.display = 'none';
        break;
      case 'username':
        this.creatBlockDisplay();
        this.creatReadOnly();
        this.readonly.username = false;
        this.un.nativeElement.focus();
        document.getElementById('editUserame').style.display = 'none';
        break;
      case 'email':
        this.creatBlockDisplay();
        this.creatReadOnly();
        this.readonly.email = false;
        this.em.nativeElement.focus();
        document.getElementById('editEmail').style.display = 'none';
        break;
      case 'mobile':
        this.creatBlockDisplay();
        this.creatReadOnly();
        this.readonly.mobile = false;
        this.mb.nativeElement.focus();
        document.getElementById('editMobile').style.display = 'none';
        break;
      case 'whatsapp':
        this.creatBlockDisplay();
        this.creatReadOnly();
        this.readonly.whatsapp = false;
        this.wa.nativeElement.focus();
        document.getElementById('editWhatsapp').style.display = 'none';
        break;

      default:
        break;
    }
  }

  creatBlockDisplay() {
    document.getElementById('editName').style.display = 'block';
    document.getElementById('editUserame').style.display = 'block';
    document.getElementById('editEmail').style.display = 'block';
    document.getElementById('editMobile').style.display = 'block';
    document.getElementById('editWhatsapp').style.display = 'block';
  }

  creatReadOnly() {
    this.readonly = {
      firstname: true,
      username: true,
      lastname: true,
      email: true,
      mobile: true,
      whatsapp: true
    }
  }

  handleUpdate() { 
    this.server.checkEmailExistence(this.user.email)
    .then(data => {
      if(data) {
        this.editMode = true;
        this.creatBlockDisplay();
        this.em.nativeElement.focus();
        this.emailErr = true;
      }
      else {
        this.editMode = false;
        this.creatBlockDisplay();
        // do update
        console.log(this.user)
      }
    })
    
  }

  checkUsernameExistence() {
    this.firestore.collection('Users', ref => ref.where('username', '==', this.user.username)).valueChanges()
    .subscribe(data => {
      console.log(data);
      (data.length == 0)? null : this.usernameErr = true;
    });
  }
}
