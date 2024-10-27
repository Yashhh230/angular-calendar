import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  @Input() location: any;

  center!: google.maps.LatLngLiteral;

  mapOptions: google.maps.MapOptions = {
    center: this.center,
    zoom: 10,
  };

  constructor(public activeModal: NgbModal) {}

  ngOnInit(): void {
    this.getMapLocation();
  }

  getMapLocation() {
    const mapLocation = new google.maps.Geocoder();
    const location = this.location;

    mapLocation.geocode({ address: location }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results && results[0].geometry.location) {
          const location = results[0].geometry.location;
          this.center = { lat: location.lat(), lng: location.lng() };
          console.log('center', this.center);
        }
      } else {
        console.error('Geocode status: ' + status);
      }
    });
  }
}
