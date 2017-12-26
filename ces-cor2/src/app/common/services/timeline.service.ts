import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TimelineService {
  tmpData
  constructor(private http: Http) { }

  getPosts(){
    const tmpData = [
      {
        title: 'Title of section 1',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
        debitis unde? Iste voluptatibus minus veritatis qui ut.`,
        crdate: 'Oct 26',
        imgurl: './assets/img/cd-icon-movie.svg'
      },
      {
        title: 'Title of section 2',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
        debitis unde? Iste voluptatibus minus veritatis qui ut.`,
        crdate: 'Dec 10',
        imgurl: './assets/img/cd-icon-location.svg'
      },
      {
        title: 'Title of section 3',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
        debitis unde? Iste voluptatibus minus veritatis qui ut.`,
        crdate: 'Nov 30',
        imgurl: './assets/img/cd-icon-movie.svg'
      },
      {
        title: 'Title of section 4',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
        debitis unde? Iste voluptatibus minus veritatis qui ut.`,
        crdate: 'Jan 1',
        imgurl: './assets/img/cd-icon-location.svg'
      },
      {
        title: 'Title of section 5',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
        debitis unde? Iste voluptatibus minus veritatis qui ut.`,
        crdate: 'Nov 16',
        imgurl: './assets/img/cd-icon-movie.svg'
      }
    ];
    return tmpData
  }

  getNewPosts(){
    console.log("service START");
    return this.http.get("./assets/posts.json")
      .map((res:Response) => {
        console.log("SERVICE BETWEEN", res.json())
        
        return res.json();
      })
      

  }
}
function getWindow (): any {
  return window;
}

@Injectable()
export class WindowRefService {
  get nativeWindow (): any {
      return getWindow();
  }
}
