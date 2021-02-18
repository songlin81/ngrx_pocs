import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ListActionType, Load, LoadSuccess, RemoveUser, RemoveUserError, RemoveUserSuccess} from '../actions/num';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ListService} from '../services/ListService';
import {of} from 'rxjs';

@Injectable()
export class ListEffects {
  loadList$ = createEffect(()=>
    this.action$.pipe(  //rxjs: loadList$ is effect name，no usage outside it can be arbitrary any name.
        ofType<Load>(ListActionType.Load),
        switchMap(action => {
            return this.listService.getList().pipe(
                map(
                    users => {
                        return new LoadSuccess(users);
                    }
                )
            );
        })
    )
  );

  removeUser$ = createEffect(()=>
    this.action$.pipe(
        ofType<RemoveUser>(ListActionType.RemoveUser),
        switchMap(_ => {
            return this.listService.removeUser(_.payload).pipe(
                map(res => {
                    console.log(res);
                    if (res === 'true') {
                        return new RemoveUserSuccess();
                    } else {
                        return new RemoveUserError();
                    }
                }),
                catchError(err => of(new RemoveUserError()))
            );
        })
    )
  );

  constructor(private action$: Actions, private listService: ListService) { }
}