import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-sale-crud',
  templateUrl: './sale-crud.component.html',
  styleUrls: ['./sale-crud.component.css']
})
export class SaleCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Tela de Vendas',
      icon: 'storefront',
      routeUrl: '/sales'
    }
   }

  ngOnInit(): void {
  }

  navigateToSaleCreate() : void {
    this.router.navigate(['/sales/create'])
  }

}
