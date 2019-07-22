import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuyComponent } from './menuy/menuy.component';
import { NavsComponent } from './navs/navs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuyComponent,
    NavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
