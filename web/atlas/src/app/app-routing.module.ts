import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { ImportComponent } from './import/import.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';
import { TasksComponent } from './tasks/tasks.component';
import { PocsComponent } from './pocs/pocs.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hosts',
    component: HostsComponent
  },
  {
    path: 'import',
    component: ImportComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'pocs',
    component: PocsComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
