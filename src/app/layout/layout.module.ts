import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FullPagesModule } from '../full-pages/full-pages.module';



@NgModule({
  declarations: [FullLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FullPagesModule
  ],
  exports:[FullLayoutComponent]
})
export class LayoutModule { }
