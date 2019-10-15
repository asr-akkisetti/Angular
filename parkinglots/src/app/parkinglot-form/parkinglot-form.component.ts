import { Component, OnInit } from '@angular/core';
import { Parkinglot } from '../parkinglot'

@Component({
  selector: 'app-parkinglot-form',
  templateUrl: './parkinglot-form.component.html',
  styleUrls: ['./parkinglot-form.component.css']
})
export class ParkinglotFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
