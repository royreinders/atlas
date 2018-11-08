import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'hosts',
    component: HostsComponent
  },
  {
    path: 'hosts',
    component: HostsComponent
  },
  {
    path: 'hosts',
    component: HostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
