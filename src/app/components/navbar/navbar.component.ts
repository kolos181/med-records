import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  date: any;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date().getFullYear() - new Date('11/22/1990').getFullYear();
  }

  //remove active selection from list
  removeActivePatients() {
    $(function () {
      $('.list-group-item').removeClass("active");
    });
  }
}
