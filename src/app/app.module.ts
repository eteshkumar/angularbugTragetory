import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AuthModule } from './auth/auth.module';
import { ManagerModule } from './manager/manager.module';
import { TesterModule } from './tester/tester.module';
import { DeveloperModule } from './developer/developer.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,ManagerModule,
    TesterModule,DeveloperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
