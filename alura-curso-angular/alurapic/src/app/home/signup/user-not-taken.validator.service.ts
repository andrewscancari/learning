import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UserNotTakenValidatorService {
  constructor(private signupService: SignUpService) { }

  checkUserNameTaken() {
    return (control: AbstractControl): Observable<boolean | {[key: string]: boolean | null}> => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.signupService.checkUserNameTaken(userName)))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    };
  }
}
