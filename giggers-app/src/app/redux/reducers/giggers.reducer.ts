import { Action } from '@ngrx/store';
import { IGiggers } from '../interfaces/giggers.interface';
import * as GiggerActions from '../actions/actions.gigger';
import { PayloadAction } from '../actions/actions.gigger';


const initialGigger: IGiggers = {
    giggerid: undefined,
    type: '',
    name: '',
    username: '',
    speciality: '',
    email: '',
    password: '',  
    description : '',
    loggedIn: false,
    loginInProgress: false,
    logoutInProgress: false,
    lastLoginFailed: false,
    lastLogoutFailed: false,
    addgiggersInProgress: false,
    addgiggersFailed: false
};


export function giggerReducer(state: IGiggers = initialGigger, action: PayloadAction): IGiggers {
    switch(action.type) {

        case GiggerActions.REQ_LOGIN:
        return Object.assign({}, state, action.payload, { loginInProgress: true });
        
        case GiggerActions.LOGIN_COMPLETED:
        return Object.assign({}, state, {
            loginInProgress: false,
            lastLoginFailed: false,
            loggedIn: true,
            password: undefined,
          });

        case GiggerActions.LOGIN_FAILED:
        return Object.assign({}, state, {
            loginInProgress: false,
            lastLoginFailed: true,
            loggedIn: false,
            password: undefined,
          });  

        case GiggerActions.GIGGER_DETAILS:
        return Object.assign({}, state, action.payload);

        case GiggerActions.ADD_GIGGER:
            return Object.assign({}, state,action.payload, {
            addgiggersInProgress: true
            });
            

        case GiggerActions.ADD_GIGGER_COMPLETED:
            return Object.assign({}, state, {
                addgiggersInProgress: false,
                addgiggersFailed: false
            });

        case GiggerActions.ADD_GIGGER_FAILED:
        return Object.assign({}, state, {
            addgiggersInProgress: false,
            addgiggersFailed: true
        }); 
        
        case GiggerActions.REMOVE_GIGGER:
        return Object.assign({}, state, !action.payload);
            
        
        case GiggerActions.LOAD_GIGGERS:
        return Object.assign({}, state, action.payload);

        case GiggerActions.LOAD_GIGGERS_COMPLETED:
        return Object.assign({}, state, {
        });


       default:
            return state;
    }
}