import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager/manager.component';
import { AssignprojectComponent } from './assignproject/assignproject.component';
import { ViewbugComponent } from './viewbug/viewbug.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllocatebugComponent } from './allocatebug/allocatebug.component';


@NgModule({
  declarations: [ManagerComponent, AssignprojectComponent, ViewbugComponent, AllocatebugComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],exports:[ManagerComponent]
})
export class ManagerModule { }
