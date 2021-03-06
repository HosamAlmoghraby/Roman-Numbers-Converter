import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  romanArabic: string = '';

  constructor() { }

  ngOnInit() {
    }

  convert(): string | number {
    if (this.romanArabic.match(/^[0-9]+$/)) {
      return this.toRoman(parseInt(this.romanArabic));
    } else {
      return this.toArabic(this.romanArabic.toUpperCase());
    }
  }

  toArabic(value: string): number {
    let arabic = 0,
        romanArray: Array<string> = value.split(""),
        numberKeys: object = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
        
    for (let i = romanArray.length-1; i >= 0; i--) {  
      if (numberKeys[romanArray[i+1]] <= numberKeys[romanArray[i]] || i == romanArray.length-1)
        arabic += numberKeys[romanArray[i]];
      else
        arabic -= numberKeys[romanArray[i]];
    }
    return arabic;
  }

  toRoman(value: number): string {
    let numberKeys: Array<any> = [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]],
        roman = '',
        i: number = 12;

    while (value != 0) {
      if (value >= numberKeys[i][1]) {
        value -= numberKeys[i][1];
        roman += numberKeys[i][0];
      } else {
        i--;
      }
    }
    return roman;
  }  
}
