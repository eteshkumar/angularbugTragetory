import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from '../manager/manager/manager.component';
import { TesterComponent } from '../tester/tester/tester.component';
import { DeveloperComponent } from '../developer/developer/developer.component';


const routes: Routes = [
  {path:'manager',component:ManagerComponent},
  {path:'tester',component:TesterComponent},
  {path:'developer',component:DeveloperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
