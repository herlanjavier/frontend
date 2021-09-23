import { Component, OnInit } from '@angular/core';
import { faDiscord, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faCapsules, faRobot } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
})
export class ServicioComponent implements OnInit {
  public pruebaIcono1 = faCapsules;
  public pruebaIcono2 = faTeamspeak;
  public pruebaIcono3 = faDiscord;
  public pruebaIcono4 = faRobot;

  public mapa!: Mapboxgl.Map;
  constructor() {}

  ngOnInit(): void {
    this.mapa = new Mapboxgl.Map({
      accessToken: environment.MAPBOX,
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-68.1900275, -16.486707], // starting position
      zoom: 15, // starting zoom
    });
    const marker = new Mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat([-68.1900275, -16.486707])
      .addTo(this.mapa);
  }
}
