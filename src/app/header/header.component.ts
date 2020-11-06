import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {

  @Output() OCSidenav = new EventEmitter<boolean>();
  title = 'Registro de Gastos';

  myDate: any = new Date();

  constructor(private datePipe: DatePipe){
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  openSidenav(){  
    this.OCSidenav.emit(true);
  }

  ngOnInit() {
  }

}
