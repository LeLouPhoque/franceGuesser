import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  data: string | undefined;

  private map!: L.Map;

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.initMap();
    this.loadRegions();
    this.dataService.currentData.subscribe(data => this.data = data);
  }

  private initMap(): void {
    this.map = L.map('map', {zoomControl:false}).setView([48, 1.3], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private loadRegions(): void {
    this.http.get<GeoJSON.FeatureCollection>('assets/regions.geojson').subscribe((data: GeoJSON.FeatureCollection) => {
      L.geoJSON(data, {
        onEachFeature: (feature, layer) => {
          if (layer instanceof L.Path && feature.properties.nom === (this.data)) {
            layer.setStyle({
              color: '#ff1000'
            })
            layer.bringToBack()
          }
        }
      }).addTo(this.map);
    });
  }
}
