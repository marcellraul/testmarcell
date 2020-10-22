import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

import { UserService } from '../../services/user.service';
import { user } from '../../intercefes/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent implements OnInit {
  id: string;
  User: user;
  constructor(
    private ActivateRouter: ActivatedRoute,
    private router: Router,
    private UserService: UserService,
    private location: Location
  ) {}

  onClick() {
    this.location.back();
  }
  title = 'Como usar el Componente Google Maps de Angular 9';

  // Configuración de Google Maps
  center = { lat: 24, lng: 12 };
  zoom = 15;
  display?: google.maps.LatLngLiteral;

  ngOnInit(): void {
    this.ActivateRouter.params.subscribe((params) => {
      (this.id = params['id']),
        this.UserService.getUser(this.id).subscribe(
          (res) => {
            (this.User = res), console.log(res);
          },
          (err) => console.log(err)
        );
    });
  }
}
