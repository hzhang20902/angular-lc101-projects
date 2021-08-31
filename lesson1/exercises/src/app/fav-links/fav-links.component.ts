import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["https://haveibeenpwned.com/", 
              "https://www.youtube.com/watch?v=qpurvlz9vaU"]

  constructor() { }

  ngOnInit() {
  }

}
