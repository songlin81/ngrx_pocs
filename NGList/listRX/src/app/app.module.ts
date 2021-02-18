import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import { list } from "./redurces/list";
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/ListEffects';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from './services/ListService';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ list }),
    EffectsModule.forRoot([ListEffects]),
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
