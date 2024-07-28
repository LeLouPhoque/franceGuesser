import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<string>('default value');
  currentData = this.dataSource.asObservable();

  changeData(data: string) {
    this.dataSource.next(data);
  }
  constructor() { }
}
