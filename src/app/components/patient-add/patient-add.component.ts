import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {PatientsComponent} from '../patients/patients.component';
import {SharedService} from '../../services/shared.service';
import $ from 'jquery';

@Component({
  providers: [PatientsComponent],
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})

export class PatientAddComponent implements OnInit {

  patient: Patient = {
    name: '',
    address: '',
    state: '',
    country: '',
    sex: '',
    date: '',
    id: null,
    createdAt: null,
    updatedAt: null
  };


  constructor(private patientService: PatientService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    //remove unnecessary buttons from navbar and patient list selected
      $(() => {
        $('#patientName, #patientAge').prop('hidden', true);
        $('.list-group-item').removeClass('active');
        $('.btn-light').prop('hidden', false);
        $('.btn-warning').prop('hidden', true);
        $('.btn-danger').prop('hidden', true);
      });
  }

  addPatient() {
    this.patientService.addPatient(this.patient).subscribe((patient) => {
        //sending new patient to patients array in PatientsComponent via interService
        this.sharedService.onNewPatient(patient);
        this.router.navigateByUrl(patient.id.toString());

      }
    );
  }
}
