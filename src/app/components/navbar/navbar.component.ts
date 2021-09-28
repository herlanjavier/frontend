import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public facebookIcon = faFacebook;
  public twitterIcon = faTwitter;
  public instagramIcon = faInstagram;

  public isLogged: boolean;
  public userName: string | null = '';
  constructor() {
    this.userName = localStorage.getItem('userName');
    this.isLogged = this.userName ? true : false;
  }

  ngOnInit(): void {}

  salir(): void {
    localStorage.setItem('userName', '');
  }
}
