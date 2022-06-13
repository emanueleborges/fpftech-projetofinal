import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit {

  sale: Sale = {
    id: 0 ,
    Cliente_fk: 0,
    Produto_fk: 0,
    Quantidade: 0,
    Cliente:[],
    Produto:[]
  }

  constructor(private saleService: SaleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSale(): void {
    this.saleService.create(this.sale).subscribe(() => {
      this.saleService.showMessage("Operação realizada com sucesso.")
      this.router.navigate(['/sales'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/sales'])
  }
  
}
