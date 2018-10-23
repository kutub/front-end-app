import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.guideService.getApiData(this.url)
        .subscribe(heroes => {
          console.log(heroes);
          this.subjects = heroes
        });
  }

}
