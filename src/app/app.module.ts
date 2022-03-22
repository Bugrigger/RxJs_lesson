import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoldDirective } from './directives/bold.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
