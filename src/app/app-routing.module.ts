import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientAddComponent} from './components/patient-add/patient-add.component';
import {PatientInfoComponent} from './components/patient-info/patient-info.component';


const routes: Routes = [
  {path: 'add', component: PatientAddComponent},
  {path: ':id', component: PatientInfoComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
