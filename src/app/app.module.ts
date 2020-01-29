import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModulesImports } from './MatModulesImport';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent, EditDialog } from './admin/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { RegisterComponent } from './players/register/register.component';
import { LoadImageComponent } from './load-image/load-image.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { LoadImageService } from './services/load-image.service';
import { EmailComponent } from './admin/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    EditDialog,
    LoadImageComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModulesImports,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EditDialog],
  providers: [DataService, NgxImageCompressService, LoadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
