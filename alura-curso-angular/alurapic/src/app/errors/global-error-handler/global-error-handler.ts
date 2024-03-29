import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Type } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get<LocationStrategy>(LocationStrategy as Type<LocationStrategy>);
    const userService = this.injector.get<UserService>(UserService as Type<UserService>);
    const serverLogService = this.injector.get<ServerLogService>(ServerLogService as Type<ServerLogService>);
    const router = this.injector.get<Router>(Router as Type<Router>);
    const url = location instanceof PathLocationStrategy ? location.path() : '';

    const message = error.message ? error.message : error.toString();

    if (environment.production) {
      router.navigate(['/error']);
    }

    StackTrace.fromError(error).then(stackFrames => {
      const stackAsString = stackFrames.map(sf => sf.toString()).join('\n');

      console.log(message);
      console.log(stackAsString);
      console.log({
        message, url, username: userService.getUserName(), stack: stackAsString
      });
      serverLogService.log({
        message,
        url,
        username: userService.getUserName(),
        stack: stackAsString
      }).subscribe(
        () => console.log('Error logged on server'),
        err => {
          console.log(err);
          console.log('Fail to send error log to server');
        }
      );
    });
  }
}
