import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-expense',
  templateUrl: './month-expense.component.html',
  styleUrls: ['./month-expense.component.css']
})
export class MonthExpenseComponent implements OnInit {

  constructor() { }

  persons = [
    {
      title:"Diciembre",
      income: 200,
      expenses: 100 
    },
    {
      title:"Enero",
      income: 500,
      expenses: 700 
    },
    {
      title:"Diciembre",
      income: 200,
      expenses: 100 
    },
    {
      title:"Enero",
      income: 500,
      expenses: 700 
    }
  ]
  ngOnInit(): void {
  }
  }
