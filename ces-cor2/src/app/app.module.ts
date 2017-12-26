import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AnimationBuilder} from '@angular/animations';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {trigger} from '@angular/animations';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { TimelineComponent } from './content/timeline/timeline.component'
import { NoticeComponent } from './content/notice/notice.component'

import { AppRoutingModule } from './app-routing.module'

import { NoticeService } from './common/services/notice.service'
import { TimelineService } from './common/services/timeline.service'

import { FilterContainer } from './common/components/filterContainer/filterContainer.component'
import { WindowRefService } from '../app/common/services/timeline.service';
@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    TimelineComponent,
    HeaderComponent,
    FilterContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
   
  ],
  providers: [NoticeService, TimelineService,WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }


