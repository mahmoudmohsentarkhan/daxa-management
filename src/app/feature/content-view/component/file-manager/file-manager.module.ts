import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from '@app/file';
import { FileManagerRoutingModule } from './file-manager-routing.module';


@NgModule({
  declarations: [
    _.FileManagerComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    _.FileAsideComponent,
    _.MyDriveComponent,
    _.AssetsComponent,
    _.ProjectsComponent,
    _.ApplicationsComponent
],
  exports: []
})
export class FileManagerModule { }
