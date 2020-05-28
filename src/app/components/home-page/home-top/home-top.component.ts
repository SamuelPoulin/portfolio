import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top',
  templateUrl: './home-top.component.html',
  styleUrls: ['./home-top.component.scss']
})
export class HomeTopComponent implements OnInit {

  text: string;
  line: string;

  nextCharacter: number;

  displayedText: string;
  displayedLine: string;

  constructor() {
    this.text = 'Samuel Poulin';
    this.line = '_';

    this.nextCharacter = 0;

    this.displayedText = '';
    this.displayedLine = '';
  }

  ngOnInit(): void {
    this.animateLine();

    setTimeout(() => this.animateText(), 1000);

    setTimeout(() => this.scrollToElement('#home-bottom-container'), 7000);
  }

  animateLine(): void {
    if (this.displayedLine === '_') {
      this.displayedLine = '';
    } else {
      this.displayedLine = '_';
    }

    setTimeout(() => {
      this.animateLine();
    }, 500);
  }

  animateText(): void {
    this.displayedText += this.text[this.nextCharacter];

    if (this.nextCharacter < this.text.length - 1) {
      this.nextCharacter++;
      setTimeout(() => this.animateText(), Math.floor(Math.random() * (300)));
    }
  }

  scrollToElement(selector: string): void {
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
