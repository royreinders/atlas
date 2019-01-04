import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { DataService } from './data.service';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportComponent } from './import/import.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';
import { FormsModule } from '@angular/forms';
import { ClrFormsModule } from "@clr/angular";
import { TasksComponent } from './tasks/tasks.component';
import { PocsComponent } from './pocs/pocs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HostsComponent,
    ImportComponent,
    TestComponent,
    ToolsComponent,
    TasksComponent,
    PocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ClrFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
