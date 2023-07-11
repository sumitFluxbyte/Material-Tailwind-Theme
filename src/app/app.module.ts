import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerticalComponent } from './@theme/navbar/verticalNav/vertical-menu/vertical.component';
import { LayoutComponent } from './@theme/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { TopMenu } from './@theme/navbar/verticalNav/menu/top-menu.component';
import { HomeComponent } from './page/home/home.component';
import { HorizontalNavComponent } from './@theme/navbar/horizontal-nav/horizontal-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VerticalComponent,
    LayoutComponent,
    TopMenu,
    HomeComponent,
    HorizontalNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
