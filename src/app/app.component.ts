import { Component } from '@angular/core';

import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages: any;
  showLogOut: boolean = true;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public user: UserService,
    public navCtrl: NavController
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.showLogOut = false;
        this.router.navigate(['home']);
        this.user.setUser(user);
        this.appPages = [
          { title: 'Lokasi Kuliner', url: '/home', icon: 'map' },
        ];
      } else {
        this.showLogOut = true;
        this.user.setUser(null);
        this.router.navigate(['signin']);
        this.appPages = [
          { title: 'Sign In', url: '/signin', icon: 'people' },
          { title: 'Sign Up', url: '/signup', icon: 'people' },
        ];
      }
    });
  }

  signout() {
    return this.ngFireAuth.signOut().then(() => {
      this.user.setUser(null);
      this.navCtrl.navigateRoot('/');
    });
  }
}
