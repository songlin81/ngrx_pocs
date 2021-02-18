import { Component, OnInit } from '@angular/core';

import {Num} from '../models/num';
import {Store} from '@ngrx/store'; 
import {NumActionType} from '../actions/num';

@Component({
  selector: 'app-model-num',
  templateUrl: './model-num.component.html',
  styleUrls: ['./model-num.component.scss']
})
export class ModelNumComponent implements OnInit {

  constructor(private _store: Store<any>) { 
    this._store.select('modelNum').subscribe(mNum => {    
      this.num = mNum;
      console.log(mNum);
    });
  }

  public num: Num;
 
  public add() {
    console.log('add');
    this._store.dispatch({
      type: NumActionType.Add
    });
  }
 
  ngOnInit() { }
}
