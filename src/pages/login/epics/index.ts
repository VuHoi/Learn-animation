import { Epic } from 'redux-observable';
import { ofAction } from 'typescript-fsa-redux-observable';
import { AnyAction } from 'typescript-fsa';
import actions from '../actions';
import { debounceTime, delay, map } from 'rxjs/operators';

export const userLogin: Epic<AnyAction> = (action$) =>
  action$.pipe(
    ofAction(actions.login.started),
    debounceTime(1000),
    delay(1000),
    map((data) => {
      return actions.login.done({
        params: { id: '1' },
        result: { data: { status: 'success' } },
      });
    })
  );
