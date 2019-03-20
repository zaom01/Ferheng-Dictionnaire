import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit {
  private wordDatafr: any;
    private wordData: any;

  constructor() { }

  ngOnInit() {
    this.wordData = JSON.parse(localStorage.getItem('selectedWord'));
    console.log(this.wordData);
    this.wordDatafr = JSON.parse(localStorage.getItem('selectedWord'));
    console.log(this.wordDatafr);
  }

}
