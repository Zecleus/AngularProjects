import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SimpleCalcAngular';

  firstNum = 0;
  secondNum = 0;

  result = 0;

  darkmode = false;

  

  getFirstNumber(value:any){
    this.firstNum = parseInt(value);
  }

  getSecondNumber(value:any){
    this.secondNum = parseInt(value);
  }

  additionButton(){
    this.result = this.firstNum + this.secondNum;
  }

  subtractButton(){
    this.result = this.firstNum - this.secondNum;
  }

  multiplyButton(){
    this.result = this.firstNum * this.secondNum;
  }

  divideButton(){
    this.result = this.firstNum / this.secondNum;
  }
   
  toggleDarkMode(){
    this.darkmode = !this.darkmode;
  }
}

