import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { modelNum } from "./redurces/modelNum";
import { ModelNumComponent } from './model-num/model-num.component'

@NgModule({
  declarations: [
    AppComponent,
    ModelNumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ modelNum }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
