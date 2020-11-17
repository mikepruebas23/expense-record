import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-expense',
  templateUrl: './month-expense.component.html',
  styleUrls: ['./month-expense.component.css']
})
export class MonthExpenseComponent implements OnInit {

  constructor() { }

  months = [
    {
      month:"Siempre cerca de ti",
      income: 200,
      expense: 50
    },
    {
      month:"Seguridad y confianza",
      income: 300,
      expense: 400
    },
    {
      month:"Asesoría personalizada",
      income: 50,
      expense: 100
    },
    {
      month:"Transparencia",
      income: 100,
      expense: 95
    }
  ]
  ngOnInit(): void {
  }

  }

