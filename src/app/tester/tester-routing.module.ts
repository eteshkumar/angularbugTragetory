import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectallocatedComponent } from './projectallocated/projectallocated.component';
import { ReportbugComponent } from './reportbug/reportbug.component';


const routes: Routes = [
  {path:'viewProject',component:ProjectallocatedComponent},
  {path:'bugRepoting/:p_Id',component:ReportbugComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesterRoutingModule { }
