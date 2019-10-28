import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.serverLog;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {
  constructor(private httpClient: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.httpClient.post(API + '/infra/log', serverLog);
  }
}
