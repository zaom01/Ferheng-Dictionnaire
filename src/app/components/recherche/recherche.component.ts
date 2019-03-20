import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  private wordDatafr: any;
    private wordData: any;
    private wordList: any[];

  constructor(
    private fbService: FirebaseService,
    public router: Router,
  ) {
}

  ngOnInit() {

  this.wordList = new Array();
  this.fbService.getWordData('Mot').then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      //console.log(doc.data());
      data.id = doc.id;
      this.wordList.push(data);
    });
    //console.log(this.wordList);
  }, error => {
    console.log(error);
  });
  }
  searchWord() {
    //console.log(this.wordData);
     for (let list of this.wordList) {
      if (list.Kurde.toLowerCase()  == this.wordData.toLowerCase() ) {
        localStorage.setItem('selectedWord', JSON.stringify(list));
        this.router.navigate(['Mot',list.Kurde]);
      }
    }
  }
  searchWordFr() {
    //console.log(this.wordDatafr);
     for (let list of this.wordList) {
      if (list.Francais.toLowerCase() == this.wordDatafr.toLowerCase()) {
        localStorage.setItem('selectedWord', JSON.stringify(list));
        this.router.navigate(['Mot',list.Francais]);
      }
    }
  }
}
