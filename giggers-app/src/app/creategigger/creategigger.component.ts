import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';

import { IGiggers } from '../redux/interfaces/giggers.interface';
import { addgigger } from '../redux/actions/actions.gigger';
import { Gigger } from '../models/giggers';
import { GiggerEffects } from '../redux/effects/giggers.effect';



@Component({
  selector: 'app-creategigger',
  templateUrl: './creategigger.component.html',
  styleUrls: ['./creategigger.component.css']
})

export class CreategiggerComponent{
  gigger: Gigger = new Gigger();
  submitted = false;

  constructor( private store: Store<IGiggers>) {}

        add(form: NgForm) {
          this.store.dispatch(addgigger(this.gigger));
          console.log(this.gigger);
          this.submitted = true;
      }
    }

