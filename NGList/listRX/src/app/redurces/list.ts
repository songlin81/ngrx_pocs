import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {ListActionType, LoadSuccess, RemoveUser} from '../actions/num';

export interface State {
  loading: boolean;
  loaded: boolean;
  list: User[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  list: []
};

export const list = (state = initialState, action: Action) => {

  switch (action.type) {
    case ListActionType.Load:
      console.log('load....');
      return {
        ...state,
        loading: true,
      };

    case ListActionType.LoadSuccess:
      console.log('load success');
      const myA = (<LoadSuccess>action).payload;
      console.log(myA);
      return {
        ...state,
        loaded: true,
        loading: false,
        list: myA
      };

    case ListActionType.RemoveUser:
      console.log('remove user');
      const userId = (<RemoveUser>action).payload;
      return Object.assign({}, state, { list: state.list.filter(function (item) {
          return item.id !== userId;
        })
      });

    default:
      return state;
  }
};