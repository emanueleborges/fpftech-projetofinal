import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SaleRead2DataSource, SaleRead2Item } from './sale-read2-datasource';

@Component({
  selector: 'app-sale-read2',
  templateUrl: './sale-read2.component.html',
  styleUrls: ['./sale-read2.component.css']
})
export class SaleRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SaleRead2Item>;
  dataSource: SaleRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Cliente_fk', 'Produto_fk', 'Quantidade'];

  constructor() {
    this.dataSource = new SaleRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
