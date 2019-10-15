import { Component, OnInit } from '@angular/core';
import { Park } from '../park'

@Component({
  selector: 'app-park-form',
  templateUrl: './park-form.component.html',
  styleUrls: ['./park-form.component.css']
})
export class ParkFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitted = false;
  onSubmit(){
    this.submitted = true;
  }

}
