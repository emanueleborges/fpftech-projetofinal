import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sale/sale.model';
import { SaleService } from '../sale/sale.service';

import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';

import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-sale-update',
  templateUrl: './sale-update.component.html',
  styleUrls: ['./sale-update.component.css']
})
export class SaleUpdateComponent implements OnInit {

  sale!: Sale

  clients: Client[] = []

  products: Product[] = []

  constructor(
    private saleService: SaleService,
    private clienteService : ClientService, 
    private productService : ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.saleService.readById(id).subscribe(sale => {
      this.sale = sale
    }),
    this.clienteService.read().subscribe(clients => {
      this.clients = clients
    }),
    this.productService.read().subscribe(products => {
      this.products = products
    });
  }


  updateSale(): void {
    this.saleService.update(this.sale).subscribe(() => {
      this.saleService.showMessage('Venda alterado com sucesso!')
      this.router.navigate(["/sales"]);
    })
  }



  cancel(): void {
    this.router.navigate(['/sales'])
  }

}
