import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/shared/services/crud.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-base-mot-crud',
  templateUrl: './base-mot-crud.component.html',
  styleUrls: ['./base-mot-crud.component.css']
})
export class BaseMotCRUDComponent implements OnInit {
    Mots: any;
    Kurde: string;
    Francais: string;
    Turquie: string;
    Iran: string;
    Irak: string;
    Syrie: string;
    // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private crudService: CRUDService,private storage: AngularFireStorage, private db: AngularFirestore) {
    this.crudService.read_Students().subscribe(data => {

          this.Mots = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              Kurde: e.payload.doc.data()['Kurde'],
              Francais: e.payload.doc.data()['Francais'],
              Turquie: e.payload.doc.data()['Turquie'],
              Iran: e.payload.doc.data()['Iran'],
              Irak: e.payload.doc.data()['Irak'],
              Syrie: e.payload.doc.data()['Syrie'],
            };
          })


        });
   }

  ngOnInit() {
  }

  CreateRecord() {
      let record = {};
      record['Kurde'] = this.Kurde;
      record['Francais'] = this.Francais;
      record['Turquie'] = this.Turquie;
      record['Irak'] = this.Irak;
      record['Iran'] = this.Iran;
      record['Syrie'] = this.Syrie;
      this.crudService.create_NewMot(record).then(resp => {
        this.Kurde = "";
        this.Francais = "";
        this.Turquie = "";
        this.Irak = "";
        this.Iran = "";
        this.Syrie = "";
        console.log(resp);
      })
        .catch(error => {
          console.log(error);
        });
    }

    RemoveRecord(rowID) {
      this.crudService.delete_Student(rowID);
    }

    EditRecord(record) {
      record.isEdit = true;
      record.EditKurde = record.Kurde;
      record.EditFrancais = record.Francais;
      record.EditTurquie = record.Turquie;
      record.EditIrak = record.Irak;
      record.EditIran = record.Iran;
      record.EditSyrie = record.Syrie;
    }

    UpdateRecord(recordRow) {
      let record = {};
      record['Kurde'] = recordRow.EditKurde;
      record['Francais'] = recordRow.EditFrancais;
      record['Turquie'] = recordRow.EditTurquie;
      record['Irak'] = recordRow.EditIrak;
      record['Iran'] = recordRow.EditIran;
      record['Syrie'] = recordRow.EditSyrie;
      this.crudService.update_Student(recordRow.id,record);
      recordRow.isEdit = false;
    }
    toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList,recordRow) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'audio') {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize( async() =>  {
          this.downloadURL = await fileRef.getDownloadURL().toPromise();

          this.db.collection('Mot').doc(recordRow.id).set( { pro:this.downloadURL}, { merge: true })
        }),
      );
  }



  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
