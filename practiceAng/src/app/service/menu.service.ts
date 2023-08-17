import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  public isOpened = new BehaviorSubject<boolean>(false)
  public opend=false;

  public toggle(){
    this.opend=!this.opend;
    this.isOpened.next(this.opend);
  }
}
