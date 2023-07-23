import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/component/product-list.component';
import { CartListComponent } from './cart/component/cart-list.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path:'', component: LandingComponent },
  { path:'product', component: ProductListComponent },
  { path:'cart', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
