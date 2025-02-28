import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListsComponent } from './shared/components/lists/lists.component';
import { TablesComponent } from './shared/components/tables/tables.component';
import { DataBindingComponent } from './shared/components/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TablesComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
