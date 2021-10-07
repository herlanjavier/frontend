import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, AfterViewInit {
  public mapa2!: Mapboxgl.Map;
  public backIcon = faChevronLeft;

  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
    this.mapa2 = new Mapboxgl.Map({
      accessToken: environment.MAPBOX,
      container: 'mapMapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-68.1900275, -16.486707], // starting position
      zoom: 15, // starting zoom
    });
    const marker = new Mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([-68.1900275, -16.486707])
      .addTo(this.mapa2);
  }

  ngOnInit(): void {
  }

  backToMenu(): void {
    this.router.navigateByUrl('/').then(r => console.log);
  }
}
