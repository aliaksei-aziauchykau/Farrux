import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NzLayoutModule, NzIconModule, NzBreadCrumbModule, NzMenuModule, NzGridModule, NzAvatarModule, NzBadgeModule, NzStepsModule, NzSelectModule, NzFormModule, NzDatePickerModule, NzCardModule, NzButtonModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GeneralLayoutComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzAvatarModule,
    NzBadgeModule,
    NzStepsModule,
    NzSelectModule,
    NzFormModule,
    NzDatePickerModule,
    NzCardModule,
    NzButtonModule
  ],
  exports: [
    GeneralLayoutComponent
  ]
})
export class LayoutModule { }
