import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackofficeManagerService {
  private _loadingSubject: Subject<boolean> = new Subject();
  private _transparentLoadingSubject: Subject<boolean> = new Subject();
  private _petitionCount = 0;
  private _transparentPetitionCount = 0;
  loadingSubject$ = this._loadingSubject.asObservable();
  transparentLoadingSubject$ = this._transparentLoadingSubject.asObservable();

  constructor() { }

  addPetition(transparent: boolean) {
    if (transparent) {
      this._transparentPetitionCount++;
    } else {
      this._petitionCount++;
    }
    this._emitLoadingSubjects();
  }

  removePetition(transparent: boolean) {
    if (transparent && this._transparentPetitionCount > 0) {
      this._transparentPetitionCount--;
    } else if (!transparent && this._petitionCount > 0) {
      this._petitionCount--;
    }
    this._emitLoadingSubjects();
  }


  private _emitLoadingSubjects() {
    this._loadingSubject.next(Boolean(this._petitionCount));
    this._transparentLoadingSubject.next(
      Boolean(this._transparentPetitionCount && this._petitionCount <= 0)
    );
  }
}
