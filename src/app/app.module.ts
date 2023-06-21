import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentTest1Component } from './content-test1/content-test1.component';
import { ContentTest2Component } from './content-test2/content-test2.component';
import { ContentTest3Component } from './content-test3/content-test3.component';
import { ContentTest4Component } from './content-test4/content-test4.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTest1Component,
    ContentTest2Component,
    ContentTest3Component,
    ContentTest4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
