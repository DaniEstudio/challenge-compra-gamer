import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/component/login.component';
import { ProductListComponent } from './product-list/component/product-list.component';
import { CartListComponent } from './cart/component/cart-list.component';
import { NotFoundComponent } from './shared/not-found/component/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'product', component: ProductListComponent },
  { path:'cart', component: CartListComponent },
  { path:'soon', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
