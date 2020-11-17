import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-expense',
  templateUrl: './personal-expense.component.html',
  styleUrls: ['./personal-expense.component.css'],
  providers: [DatePipe]
})
export class PersonalExpenseComponent implements OnInit {

  myDate: any = new Date();
  form: FormGroup;
  disabledFormButton:boolean = false;

  initExpense= {
    initValue: 1000,
    finalvalue: 157
  }
  myData = [{
    name: 'Internet',
    value: 565,
    date: '2020-10-09',
    typeMove: 1
  },
  {
    name: 'Paga',
    value: 2000,
    date: '2020-10-09',
    typeMove: 2
  },
  {
    name: 'Prestamo',
    value: 300,
    date: '2020-10-09',
    typeMove: 3
  },
  {
    name: 'pago de prestamo',
    value: 565,
    date: '2020-10-09',
    typeMove: 4
  },
];

  constructor(private readonly formBuilder: FormBuilder,private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }
  
  get f() { return this.form.controls; }

  //type moves
  typeMove = [
    {
      title: 'Ingreso',
      value: 1
    } ,
    {
      title: 'Gasto',
      value: 2
    },
    {
      title: 'prestamo en contra',
      value: 3
    },
    {
      title: 'prestamo a favor',
      value: 4
    }
  ]

  ngOnInit() {
    this.form = this.formBuilder.group({
      type: ['', Validators.required],
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ])],
      value: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1), 
        Validators.maxLength(12)
      ])],
      
    }); 
  }

  async submit(){

    this.disabledFormButton = false;

    if(this.form.invalid){
      // this.openModal();
      this.disabledFormButton = true;
      return;
    }


    let myObj = {
      typeMove: this.f.type.value,
      name: this.f.name.value,
      value: parseInt(this.f.value.value),
      date: this.myDate,
    }

    this.myData.push(myObj);
    console.log(this.myData)

    this.onResetForm();
  }

  onResetForm() {
    this.form.reset();
    // this.form.clearValidators();
  }
}


// ng build --prod --base-href https://mikepruebas23.github.io/expense-record/
// ngh --dir=dist/expenseRecord