import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  // photos = [{
  //     url: "http://http2.mlstatic.com/patchs-megaman-x4-x5-e-x6-ps1-D_NQ_NP_857421-MLB20798884371_072016-F.jpg",
  //     description: "Mega Man X4"
  //   }, {
  //     url: "http://2.bp.blogspot.com/-s95EENjZZf0/WXd-DDzMisI/AAAAAAAACGw/JWSdJ0NewFcfycXW_ADrk296j8PYKrCCgCLcBGAs/s400/798426-megamanx5_ps_uk.jpg",
  //     description: "Mega Man X5"
  //   }];

  photos: Object[] = [];

  constructor(http: HttpClient) {
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err.message, err)
      );
  }
}
