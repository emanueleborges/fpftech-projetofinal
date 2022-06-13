import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SaleRead2Item {
  Nome: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SaleRead2Item[] = [
  {id: 1, Nome: 'Hydrogen'},
  {id: 2, Nome: 'Helium'},
  {id: 3, Nome: 'Lithium'},
  {id: 4, Nome: 'Beryllium'},
  {id: 5, Nome: 'Boron'},
  {id: 6, Nome: 'Carbon'},
  {id: 7, Nome: 'Nitrogen'},
  {id: 8, Nome: 'Oxygen'},
  {id: 9, Nome: 'Fluorine'},
  {id: 10, Nome: 'Neon'},
  {id: 11, Nome: 'Sodium'},
  {id: 12, Nome: 'Magnesium'},
  {id: 13, Nome: 'Aluminum'},
  {id: 14, Nome: 'Silicon'},
  {id: 15, Nome: 'Phosphorus'},
  {id: 16, Nome: 'Sulfur'},
  {id: 17, Nome: 'Chlorine'},
  {id: 18, Nome: 'Argon'},
  {id: 19, Nome: 'Potassium'},
  {id: 20, Nome: 'Calcium'},
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SaleRead2DataSource extends DataSource<SaleRead2Item> {
  data: SaleRead2Item[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SaleRead2Item[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SaleRead2Item[]): SaleRead2Item[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SaleRead2Item[]): SaleRead2Item[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'Nome': return compare(a.Nome, b.Nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
