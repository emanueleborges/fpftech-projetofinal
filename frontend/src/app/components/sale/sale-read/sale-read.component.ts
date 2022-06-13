import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-sale-read',
  templateUrl: './sale-read.component.html',
  styleUrls: ['./sale-read.component.css']
})
export class SaleReadComponent implements OnInit {

  sales: Sale[] = []
  displayedColumns = ['id', 'Cliente_fk','Produto_fk', 'Quantidade', 'action']

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.read().subscribe(sales => {
      this.sales = sales
    })
  }

}
