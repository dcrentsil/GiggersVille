export interface IGiggers {
    giggerid: number;
    type: string;
    name: string;
    username: string;
    email: string;
    password: string;
    speciality: string;
    description : string;


    loggedIn: boolean;
    loginInProgress: boolean;
    logoutInProgress: boolean;
    lastLoginFailed: boolean;
    lastLogoutFailed: boolean;


    addgiggersInProgress: boolean;
    addgiggersFailed: boolean;
}