import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Router } from '@angular/router';
import { Sale } from '../sale.model';


import { Client } from '../../client/client.model';
import { ClientService } from '../../client/client.service';



import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';


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
  clients: Client[] = []

  products: Product[] = []

  constructor(
    private saleService: SaleService,
    private clienteService : ClientService, 
    private productService : ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clients => {
      this.clients = clients
    }),
    this.productService.read().subscribe(products => {
      this.products = products
    })
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
