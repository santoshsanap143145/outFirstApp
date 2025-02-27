import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListsComponent } from './shared/components/lists/lists.component';
import { TablesComponent } from './shared/components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
