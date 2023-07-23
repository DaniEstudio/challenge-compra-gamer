import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/component/navbar.component';
import { ProductListComponent } from './product-list/component/product-list.component';
import { CardComponent } from './shared/card/component/card.component';
import { AlphabeticalOrderPipe } from './shared/pipe/alphabetical-order.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './shared/search-bar/component/search-bar.component';
import { ProductSearchService } from './shared/service/product-search.service';
import { CartListComponent } from './cart/component/cart-list.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    ProductListComponent,
    CartListComponent,
    CardComponent,
    AlphabeticalOrderPipe,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [ProductSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
