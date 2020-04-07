import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectComponent } from './dialogue/select/select.component';
import { StoreDataService } from './store-data.service';
import { TheUsualComponent } from './dialogue/the-usual/the-usual.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectComponent,
    TheUsualComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
