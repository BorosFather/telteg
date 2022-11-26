/*
* File: app.component.ts
* Author: Boros Zoltán
* Copyright: 2022, Boros Zoltán
* Group: Szoft II N
* Date: 2022-11-26
* Github: https://github.com/BorosFather
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telteg';

  aSide: number = 0;
  bSide: number = 0;
  area!: number;
  hideArea = false;
  hiddenbutt = true;

  calcHandle():void{
    if(this.checkValid()){
      this.area = this.calcArea(this.aSide, this.bSide);
      this.aSide = 0;
      this.bSide = 0;
      this.hideArea = true;
    }
    else{
     alert("Érvénytelen bemenő adatok!")
    }
  }

  calcArea(aSide:number, bSide:number):number{
    let area = (aSide * bSide) * 2;
    return area;
  }

  checkValid():boolean{
  let valid = true;
 if(this.aSide <=0){
  valid = false;
 }
 if(this.bSide <=0){
  valid = false;
 }
 return valid;
  }

  hidden():void{
    this.hideArea = true;
  }

}
