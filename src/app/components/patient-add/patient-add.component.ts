import {Component, OnInit} from '@angular/core';
import {Patient} from '../../models/Patient';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';
import {PatientsComponent} from '../patients/patients.component';

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
    date: new Date(),
    id: null,
    createdAt: null,
    updatedAt: null
  };


  constructor(private patientService: PatientService, private router: Router, private patientsComp: PatientsComponent) {
  }

  ngOnInit() {
  }

  addPatient() {
    this.patientService.addPatient(this.patient).subscribe((patient) => {
        this.router.navigateByUrl(patient.id.toString());
        this.patientsComp.ngOnInit();
      }
    );
  }
}
