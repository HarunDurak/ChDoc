import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SidebarComponent } from './layout/full-layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/full-layout/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SidebarComponent,
    NavbarComponent,
    LoginComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
