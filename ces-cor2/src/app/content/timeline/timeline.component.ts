import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TimelineService } from './../../common/services/timeline.service';
import { NgFor } from '@angular/common';
import { WindowRefService } from '../../common/services/timeline.service';
declare var jquery:any;
declare var $ :any;
@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
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
  
  posts

  private _window: Window;

  constructor(private timelinedata: TimelineService, windowRef: WindowRefService) {
    // this.posts = timelinedata.getPosts()
    console.log("component START");
    this._window = windowRef.nativeWindow;

    this.posts = timelinedata.getNewPosts()
    console.log("component DONE", this.posts);
  }

  doThing() {
    console.log(this._window);
    this._window.scroll(0,0);
  }





  title = 'abgular 4 with jquery';
  toggleTitle(){
    $('.title').slideToggle();
  }
}