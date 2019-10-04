import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { BalleDetailsComponent } from './balle-details/balle-details.component';
import {FormsModule} from '@angular/forms';
import { MiageColorComponent } from './miage-color/miage-color.component';

@NgModule({
  declarations: [
    AppComponent,
    BalleDetailsComponent,
    MiageColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
