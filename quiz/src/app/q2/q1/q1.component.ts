import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss']
})
export class Q1Component implements OnInit {

  constructor() { }
  val: number
  type: number = 1
  chkVal : boolean
  ngOnInit(): void {
  }
  chkPrime(num: number) {
    num = Math.round(num)
    if(num<0) num=1
    this.val = num
    for (var i = 2; i < num; i++){
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  chkFibanacci(num: number) {
    return this.fibonacci(num)
  }
  chkNum( n ) {
      var numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
      return numStr.test( n.toString() );
  }
  
  isPerfectSquare(x:number){
      let s = Number(Math.sqrt(x));
      return (s * s == x);
  }
  
  // Returns true if n is a Fibonacci Number, else false
  fibonacci(n:number){
  
      // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
      // is a perfect square
      return this.isPerfectSquare(5 * n * n + 4) ||
            this.isPerfectSquare(5 * n * n - 4);
  }
 
}
