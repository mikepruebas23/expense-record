import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-expense',
  templateUrl: './month-expense.component.html',
  styleUrls: ['./month-expense.component.css']
})
export class MonthExpenseComponent implements OnInit {

  constructor() { }

  beneficios = [
    {
      title:"Siempre cerca de ti",
      description:"En nuestros más de 3,000 módulos de atención ubicados en las más de 1,500 tiendas Coppel y Zapatería Coppel Canadá de todo el país, a su servicio en el horario de las tiendas incluyendo sábados y domingos.",
    },
    {
      title:"Seguridad y confianza",
      description:"Los recursos de su cuenta individual son administrados por personas expertas en inversiones.",
    },
    {
      title:"Asesoría personalizada",
      description:"Lo atendemos con la sencillez y amabilidad que usted conoce, brindándole información y asesoría para que obtenga todos los beneficios del sistema de pensiones.",
    },
    {
      title:"Transparencia",
      description:"Puede consultar su saldo en cualquier momento en nuestros módulos de atención o en nuestra página de Internet, además del envío a su domicilio de 3 estados de cuenta al año.",
    }
  ]
  ngOnInit(): void {
  }

  si(){
    alert('si');
  }
  }

