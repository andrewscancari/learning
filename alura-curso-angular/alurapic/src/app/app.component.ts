import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private actvatedRoute: ActivatedRoute,
    private titleService: Title) {}

    ngOnInit(): void {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map( () => this.actvatedRoute))
        .pipe(map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }))
        .pipe(switchMap(route => route.data))
        .subscribe(event => this.titleService.setTitle(event.title));
    }
}
