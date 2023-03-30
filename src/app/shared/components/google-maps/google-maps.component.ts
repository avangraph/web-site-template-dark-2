import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.sass']
})
export class GoogleMapsComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  options: google.maps.MapOptions = {
    center: {lat: 52.2447671, lng: 21.0017081},
    zoom: 12,
    mapId: "9c548527f515b894"
  };

  markers = [
    {
      position: {
        lat: 52.2447671,
        lng: 21.0017081,
      },
      label: {
        // color: 'red',
        // text: 'Marker label',
      },
      title: 'Marker title',
      options: {
        icon: {
          url: 'https://img.icons8.com/ios-filled/72/DE2D2D/google-maps-new.png',
        },
      },
    }
  ];

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCk2jW6KhDko7ShK2h5bEObDW8lalwt4Io', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
  }

}
