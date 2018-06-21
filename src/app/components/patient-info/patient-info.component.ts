import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  patient: Patient = {
    name: '',
    address: '',
    state: '',
    country: '',
    sex: '',
    date: new Date(),
    id: null,
    createdAt: null,
    updatedAt: null
  };

  constructor(private route: ActivatedRoute, private patientService: PatientService) {
    //listening activated route as observable, in case of different :id path variable value
    this.route.url.subscribe(url => {
      this.patientService.getPatient(+url[0].path).subscribe(patient => {
        this.patient = patient;
      })
    });
  }

  ngOnInit() {

  }
}
