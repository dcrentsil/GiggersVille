import { Action } from '@ngrx/store';
import { Gigger } from '../../models/giggers';
import { IGiggers } from '../interfaces/giggers.interface';

export interface PayloadAction extends Action {payload: any};

export const GIGGER_DETAILS= 'GIGGER_DETAILS';
export const ADD_GIGGER = 'ADD_GIGGER';
// export const SELECT_GIGGER = 'SELECT_GIGGER';
export const REMOVE_GIGGER = 'Remove_GIGGER';
export const REQ_LOGIN = 'REQ_LOGIN';
export const LOGIN_COMPLETED = 'LOGIN_COMPLETED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const UPDATE_GIGGER_DETAILS = 'UPDATE_GIGGER_DETAILS';
export const LOAD_GIGGERS = 'LOAD_GIGGER';
export const ADD_GIGGER_COMPLETED = 'ADD_GIGGER_COMPLETED';
export const ADD_GIGGER_FAILED = 'ADD_GIGGER_FAILED';
export const LOAD_GIGGERS_COMPLETED = 'LOAD_GIGGERS_COMPLETED';
export const LOAD_GIGGERS_FAILED = 'LOAD_GIGGERS_FAILED';

export const reqLogin = (username: string, password: string): PayloadAction => {
	return {
	  type: REQ_LOGIN,
	  payload: {
		username: username,
		password: password,
	  },
	};
  };


  export const loginCompleted = (): Action => {
	return {
	  type: LOGIN_COMPLETED,
	};
  };
	
  export const loginFailed = (): Action => {
	return {
	  type: LOGIN_FAILED,
	};
  };

export const addgigger = (data: Gigger): PayloadAction => {
	return {
        type: ADD_GIGGER,
        payload: data
	};
};

export const addgiggerCompleted = (): Action => {
	return {
		type: ADD_GIGGER_COMPLETED
	};
};

export const addgiggerFailed = (): Action => {
	return {
		type: ADD_GIGGER_FAILED
	};
};


export const updateGiggerDetails = (
  userid: number,
  username: string,
  name: string,
  email: string,
): PayloadAction => {
  return {
    type: UPDATE_GIGGER_DETAILS,
    payload: {
      userid: userid,
      username: username,
    	name: name,
      email: email,
    },
  };
};

export const removegigger = (data: Gigger): PayloadAction => {
	return {
		type: REMOVE_GIGGER,
		payload: data
	};
};

export const loadgiggers = () : Action => {
	return {
		type: LOAD_GIGGERS
	};
};

export const loadgiggerscompleted = (data: Gigger): PayloadAction => {
	return {
		type: LOAD_GIGGERS_COMPLETED,
		payload: data
	};
};

export const loadgiggersfailed = (): Action => {
	return {
		type: LOAD_GIGGERS_FAILED
	};
};

export const giggerdetails = (giggers: IGiggers): PayloadAction => {
	return {
		type: GIGGER_DETAILS,
		payload: {
			giggers: giggers,
		}
	}
}