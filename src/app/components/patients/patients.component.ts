import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import $ from 'jquery';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
    console.log('inside patients on init');
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  toggleActive() {
    $(function () {
      $('.list-group-item').click(function (e) {
        $('.list-group-item').removeClass('active');
        $(e.target).addClass('active');
      });
    });
  }
}
