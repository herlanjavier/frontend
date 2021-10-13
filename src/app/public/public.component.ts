import {Component, OnInit} from '@angular/core';
import {faUserLock} from '@fortawesome/free-solid-svg-icons/faUserLock';
import {Router} from '@angular/router';
import {faWhatsapp, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public userIcon = faUserLock;
  public userName = '';
  public password = '';
  public facebookIcon = faFacebook;
  public twitterIcon = faTwitter;
  public whatsappIcon = faWhatsapp;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  scrollDown(): void {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: 'smooth'
    });
  }

  login(): void {
    if (this.userName !== '' && this.password !== '') {
      this.router.navigateByUrl('/secure').then();
    }
  }
}
