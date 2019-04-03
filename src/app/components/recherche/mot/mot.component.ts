import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import { ArrayService } from 'src/app/shared/services/array.service';


@Component({
  selector: 'app-mot',
  templateUrl: './mot.component.html',
  styleUrls: ['./mot.component.css']
})
export class MotComponent implements OnInit {
  public wordDatafr: any;
    public wordData: any;
   private sound  : any;
   private try: any;
   private try1:any;
   public result: any;
  constructor(   private ary: ArrayService
) { }

  ngOnInit() {
    this.wordData = JSON.parse(localStorage.getItem('selectedWord'));
    //console.log(this.wordData);
    //console.log(this.wordData.Phrase);
    if(this.wordData.Phrase){
    this.try = this.wordData.Phrase;
    //console.log (this.try);
    this.try1 = this.try.split(" ");
    //console.log(this.try1);0o98
    this.result= this.ary.shuffle(this.try1);}
    //console.log(this.result);
    this.wordDatafr = JSON.parse(localStorage.getItem('selectedWord'));
    console.log(this.wordDatafr);


  }
playTrack(pro){
  this.sound = new Howl({
       src: [pro],
       buffer: true,
       html5:true
    });
this.sound.play();
 }
verifier(verif){
  if (verif.toLowerCase()   == this.try.toLowerCase() ) {
    window.alert("trés bien")
  }
  else{
    window.alert("recommance")
  }

 }


}
