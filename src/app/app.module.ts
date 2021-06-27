import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { reducer } from './reducers/tutorial.reducer';
import { StoreModule } from '@ngrx/store';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  declarations: [ AppComponent, HelloComponent,ReadComponent,CreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
