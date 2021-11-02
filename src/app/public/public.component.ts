import {Component, OnInit} from '@angular/core';
import {faUserLock} from '@fortawesome/free-solid-svg-icons/faUserLock';
import {Router} from '@angular/router';
import {faFacebook, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {UserService} from '../integration/services/user.service';
import {Usuario} from '../integration/interfaces/usuario.interface';

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

  constructor(private router: Router, private userService: UserService) {
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
    const user = {} as Usuario;
    user.nombre = this.userName;
    user.password = this.password;

    this.userService.login(user).subscribe(usr => {
      if (usr) {
        sessionStorage.setItem('serviUser', usr.nombre + ' ' + usr.paterno);
        this.router.navigateByUrl('/secure');

      }
    });
  }


}
