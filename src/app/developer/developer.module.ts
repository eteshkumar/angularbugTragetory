import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer/developer.component';


@NgModule({
  declarations: [DeveloperComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule
  ],exports:[DeveloperComponent]
})
export class DeveloperModule { }
