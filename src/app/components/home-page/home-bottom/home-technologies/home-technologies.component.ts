import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HomeTechnologyComponent } from './home-technology/home-technology.component';
import data from 'src/assets/data';
import { Technology } from 'src/app/models/technology';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-home-technologies',
  templateUrl: './home-technologies.component.html',
  styleUrls: ['./home-technologies.component.scss']
})
export class HomeTechnologiesComponent {
  technologies: Technology[];

  constructor() {
    this.technologies = data.technologies;
    this.technologies.sort((a, b) => b.percent - a.percent);
  }

}
