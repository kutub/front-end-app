import { Component, OnInit } from '@angular/core';
import { GuideService } from '../../guide.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private guideService: GuideService) { }

  url = 'http://127.0.0.1:8000/study/api/';
  subjects;

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
