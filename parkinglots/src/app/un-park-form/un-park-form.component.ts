import { Component, OnInit } from '@angular/core';
import { UnPark } from '../un-park'


@Component({
  selector: 'app-un-park-form',
  templateUrl: './un-park-form.component.html',
  styleUrls: ['./un-park-form.component.css']
})
export class UnParkFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
