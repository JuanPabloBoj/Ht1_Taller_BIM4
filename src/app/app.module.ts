import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BodyComponent } from './core/components/body/body.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { FormComponent } from './shared/components/form/form.component';
import { AnnouncementBarComponent } from './core/components/announcement-bar/announcement-bar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    AlertComponent,
    FormComponent,
    AnnouncementBarComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
