
import {from as observableFrom,  Subject ,  of ,  Observable, ObservableInput } from 'rxjs';

import {catchError, tap, switchMap, mergeMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Gigger } from '../../models/giggers';

import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { RoutingModule } from '../../app.routing';





import { PayloadAction } from '../actions/actions.gigger';
import { AlertService } from '../../services/alert/alert.service';
import { GiggersService } from '../../giggers.service';
import * as GiggerActions from '../actions/actions.gigger';

@Injectable()
export class GiggerEffects {
    constructor(
      private actions$: Actions,
      private giggersService: GiggersService,
      private router: Router,
      private alertService: AlertService,
    ){}

    @Effect()
    addgigger$: Observable<Action> = this.actions$
      .ofType(GiggerActions.ADD_GIGGER).pipe(
      switchMap((action: PayloadAction): ObservableInput<Action> => {
        return this.giggersService
          .creategigger(action.payload).pipe(
          switchMap((data) => {
            return of(GiggerActions.addgiggerCompleted());
          }),
          catchError(err => {
            return of(GiggerActions.addgiggerFailed());
          }),);
      }));
  

      @Effect({ dispatch: false})
      addgiggerCompleted$: Observable<Action> = this.actions$
        .ofType(GiggerActions.ADD_GIGGER_COMPLETED).pipe(
        tap(_ => this.router.navigate(['/giggers'])));



@Effect()
login$: Observable<Action> = this.actions$
  .ofType(GiggerActions.REQ_LOGIN).pipe(
  switchMap((action: PayloadAction): ObservableInput<Action> => {
    return (
      this.giggersService
        .login(action.payload.username, action.payload.password).pipe(
        mergeMap((data) => {
          return (
            this.giggersService
              .getgiggerbyid(data.id).pipe(
              mergeMap((data) => {
                return observableFrom([
                  GiggerActions.updateGiggerDetails(
                    data.id,
                    data.username,
                    data.name,
                    data.email,
                  ),
                  GiggerActions.loginCompleted(),
                ]);
              }),
            catchError(err => {
              this.alertService.error('ERROR GETTING GIGGER INFO');
              return of(GiggerActions.loginFailed());
            }),)
          )
        }))
      );
    }
  ))}