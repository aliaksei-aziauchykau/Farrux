import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NzLayoutModule, NzIconModule, NzBreadCrumbModule, NzMenuModule, NzGridModule, NzAvatarModule, NzBadgeModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [GeneralLayoutComponent, NavBarComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzAvatarModule,
    NzBadgeModule
  ],
  exports: [
    GeneralLayoutComponent
  ]
})
export class LayoutModule { }
