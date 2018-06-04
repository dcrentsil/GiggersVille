import { Component } from '@angular/core';
//import { UserService } from '../../services/user/user.service';
import { Gigger } from '../../models/giggers';
import { IGiggers } from '../../redux/interfaces/giggers.interface'
import { Store } from '@ngrx/store';
import { reqLogin } from '../../redux/actions/actions.gigger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public gigger: Gigger = new Gigger();

  constructor(private store: Store<IGiggers>) {}

  login() {
    this.store.dispatch(reqLogin(this.gigger.username, this.gigger.password));
  }
}
