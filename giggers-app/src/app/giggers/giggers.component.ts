import { Component, OnInit } from '@angular/core';
import { Gigger } from '../models/giggers';
import { GiggersService } from '../giggers.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-giggers',
  templateUrl: './giggers.component.html',
  styleUrls: ['./giggers.component.css']
})
export class GiggersComponent implements OnInit {
  errorMsg: string;
  giggers: Gigger[];
   gigs: Gigger[];


  constructor(private giggersService: GiggersService){}

  ngOnInit() {
    this.getgiggers();
    this.getgigs();
  }

  getgiggers() {
    this.giggersService.getgiggers()
    .subscribe(
      giggers => this.giggers = giggers,
      error => this.errorMsg = error
    )
  }

  getgiggerbyid(id: number) {
  this.giggersService.getgiggerbyid(id)
  }

  getgigs() {
    this.giggersService.getgigs()
    .subscribe(
      gigs => this.gigs = gigs,
      error => this.errorMsg = error
    )
  } 

  deletegigger(id: number, index:number) {
    this.giggersService.deletegigger(id).subscribe(
      data=>console.log(data));
      this.giggers.splice(index,1);
  }

  deletegigs(id:number, index:number) {
    this.giggersService.deletegigs(id).subscribe(
      data=>console.log(data));
      this.gigs.splice(index, 1);
  }

}