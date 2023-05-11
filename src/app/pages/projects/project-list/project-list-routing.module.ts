import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from "./project-list.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProjectListRoutingModule {}
