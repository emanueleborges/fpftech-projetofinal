import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../sale/sale.model';
import { SaleService } from '../sale/sale.service';

@Component({
  selector: 'app-sale-delete',
  templateUrl: './sale-delete.component.html',
  styleUrls: ['./sale-delete.component.css']
})
export class SaleDeleteComponent implements OnInit {

  sale!: Sale

  constructor(
    private saleService: SaleService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.saleService.readById(id).subscribe(sale => {
      this.sale = sale
    })
  }

  deleteSale(): void {
    this.saleService.delete(this.sale.id).subscribe(() => {
      this.saleService.showMessage("Venda excluído com sucesso!")
      this.router.navigate(["/sales"]);
    })
  }

  cancel(): void {
    this.router.navigate(['/sales']);
  }
}
