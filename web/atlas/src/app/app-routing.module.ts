import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HostsComponent } from './hosts/hosts.component';
import { OverviewComponent } from './overview/overview.component';
import { ImportComponent } from './import/import.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';
import { TasksComponent } from './tasks/tasks.component';

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
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
