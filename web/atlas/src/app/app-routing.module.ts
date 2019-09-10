import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FindingsComponent } from './findings/findings.component';
import { HostsComponent } from './hosts/hosts.component';
import { ImportComponent } from './import/import.component';
import { TestComponent } from './test/test.component';
import { ToolsComponent } from './tools/tools.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'import',
    component: ImportComponent
  },
  {
    path: 'findings',
    component: FindingsComponent
  },
  {
    path: 'hosts',
    component: HostsComponent
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
