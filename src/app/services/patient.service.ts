import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private readonly URL = 'http://localhost:8080/api/patients';

  constructor(private httpClient: HttpClient) {
  }

  public getPatient(id: number): Observable<Patient> {
    const url = `${this.URL}/${id}`;
    return this.httpClient.get<Patient>(url);
  }

  public getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.URL);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.URL, patient);
  }
}
