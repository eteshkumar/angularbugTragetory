import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import { ViewbugComponent } from './viewbug/viewbug.component';
import { AllocatebugComponent } from './allocatebug/allocatebug.component';


const routes: Routes = [
  {path:'assignproject',component:AssignprojectComponent},
  {path:'viewbug',component:ViewbugComponent},
  {path:'allocatebug',component:AllocatebugComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
