import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Pogi", "Tangkad", "pogi.tangkad@pogi.com", 50000),
    new SalesPerson("Kevin", "Repking", "kevin.repking@pogi.com", 33000),
    new SalesPerson("Mahal", "Ko", "mahal.ko@pogi.com", 17000),
    new SalesPerson("Asawa", "Ganda", "asawa.ganda@pogi.com", 99000)
  ];
  

  constructor() {}


}
