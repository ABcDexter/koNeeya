import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})

export class SalesPersonListComponent implements OnInit {

  //constructor() { }

  salesPersonList: SalesPerson[] = [
	new SalesPerson("A", "B", "ab@gmail.com", 10000),
	new SalesPerson("C", "D", "cd@gmail.com", 20000),
	new SalesPerson("E", "F", "ef@gmail.com", 30000),
	new SalesPerson("G", "H", "gijoe@gmail.com", 40000)
  ]
	
  ngOnInit(): void {
  }

}
