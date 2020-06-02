import { Component, OnInit, Input } from '@angular/core';
import { Technology } from 'src/app/models/technology';
import * as data from 'src/assets/data.json';
import { Level } from 'src/app/models/level';

@Component({
  selector: 'app-home-technology',
  templateUrl: './home-technology.component.html',
  styleUrls: ['./home-technology.component.scss']
})
export class HomeTechnologyComponent {

  @Input() technology: Technology;

  levels: Level[];

  constructor() {
    this.levels = data.levels;
  }

  get level(): string {
    let result: string;

    this.levels.forEach((level) => {
      if (level.min <= this.technology.percent && level.max >= this.technology.percent) {
        result = level.name;
      }
    });

    return result;
  }

  get degrees(): number {
    return this.technology.percent / 100 * 450;
  }
}
