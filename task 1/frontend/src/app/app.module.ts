import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreJsonComponent } from './store-json/store-json.component';
import { RetrieveJsonComponent } from './retrieve-json/retrieve-json.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreJsonComponent,
    RetrieveJsonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
