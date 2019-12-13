import { Component, OnInit } from '@angular/core';
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  start = marker([ 18.57272,73.68893], {
    icon: icon({
        iconSize: [ 35, 40 ],
        // iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/icons/house.png'
      })
  });

  end = marker([ 18.51778,73.93265], {
    icon: icon({
      iconSize: [ 35, 40 ],
      // iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/icons/pin.png'
    })
  });


  currentLocation = marker([18.5064,73.89419], {
    icon: icon({
      iconSize: [ 25, 25 ],
      iconUrl: 'assets/icons/flight.png'
    })
  });

  routeCovered = polyline([[18.57272,73.68893],
      [18.57438,73.70633],
      [18.57991,73.71938],
      [18.59162,73.7393],
      [18.59259,73.75682],
      [18.56918,73.76506],
      [18.56202,73.78464],
      [18.55487,73.79666],
      [18.54251,73.82688],
      [18.53177,73.84336],
      [18.52917,73.85092],
      [18.52689,73.85057],
      [18.52266,73.85675],
      [18.52722,73.86362],
      [18.52396, 73.86843],
      [18.52071,73.8729],
      [18.51843,73.87908],
      [18.50835,73.88011],
      [18.50770,73.8856],
      [18.5064,73.89419],
      
    ], {color: 'purple'} );

  
  routeRemaining = polyline([
      [18.50705,73.9014],
      [18.50542,73.91376],
      [18.50412,73.92475],
      [18.50314,73.92819],
      [18.51778,73.93265]
    ], {color: 'grey', dashArray: [7]} );

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }),
      this.start, this.end, this.currentLocation, this.routeCovered, this.routeRemaining
    ],
    zoom: 12,
    center: latLng([18.52266,73.85675])
  };

}
