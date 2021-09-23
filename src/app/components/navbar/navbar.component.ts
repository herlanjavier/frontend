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
  constructor() {}

  ngOnInit(): void {}
}
