import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client-delete/client-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "products/update/:id",
  component: ProductUpdateComponent
},{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},


{
  path: "clients",
  component: ClientCrudComponent
},{
  path: "clients/create",
  component: ClientCreateComponent
},{
  path: "clients/update/:id",
  component: ClientUpdateComponent
},{
  path: "clients/delete/:id",
  component: ClientDeleteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
