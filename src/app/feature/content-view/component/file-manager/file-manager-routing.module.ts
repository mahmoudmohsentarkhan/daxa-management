import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent, AssetsComponent, FileManagerComponent, MyDriveComponent, ProjectsComponent } from '@app/file';


const routes: Routes = [
  {
    path:'', component:FileManagerComponent,
    children:[
      {path:'', component:MyDriveComponent},
      {path:'assets', component:AssetsComponent},
      {path:'projects', component:ProjectsComponent},
      {path:'applications', component:ApplicationsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileManagerRoutingModule { }
