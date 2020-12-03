import { Component } from '@angular/core';
import {WikipediaService} from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'wsearch';

  pages =[] ;

  constructor(private wikipedia : WikipediaService){

  }

  //https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  onTerm(term : string ){

       this.wikipedia.search(term).subscribe( pages =>{

       this.pages = pages ;

    }) ;

  }


}
