// import { Component, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TimelineService } from './../../common/services/timeline.service';
import { NgFor } from '@angular/common';
import { WindowRefService } from '../../common/services/timeline.service';
// declare var jquery:any;
declare var $ :any;
@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  host: {'(window:scroll)': 'track($event)'},
  animations: [
     trigger('fade',[
       transition('void  => *',[
         style( { backgroundColor:'green', opacity:'0'} ),
         animate(2000, style({backgroundColor:'green', opacity:'0'

         }))
       ])
     ])
  ]
})
export class TimelineComponent {
  
  posts;
  goUpIcon;

  private _window: Window;

  // constructor(private timelinedata: TimelineService, windowRef: WindowRefService, private elRef: ElementRef) {
  constructor(private timelinedata: TimelineService, windowRef: WindowRefService) {
    // this.posts = timelinedata.getPosts()
    console.log("component START");
    this._window = windowRef.nativeWindow;

    this.posts = timelinedata.getNewPosts()
    console.log("component DONE", this.posts);
  }
  
  track($event) {
    if(window.pageYOffset > 100){
     
      this.goUpIcon = 'display-block';
    } else {
      
      this.goUpIcon = 'display-none';
    }
  }

  doThing() {
    console.log(this._window);
    this._window.scroll({left:0,top:0, behavior:'smooth'});
  }

}