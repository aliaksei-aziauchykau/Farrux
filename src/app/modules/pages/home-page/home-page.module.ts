import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
