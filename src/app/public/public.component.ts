import {Component, OnInit} from '@angular/core';
import {faUserLock} from '@fortawesome/free-solid-svg-icons/faUserLock';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public userIcon = faUserLock;

  constructor() {

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
}
