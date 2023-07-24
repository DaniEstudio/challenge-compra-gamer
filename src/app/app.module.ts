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
import { CartListComponent } from './cart/component/cart-list.component';
import { HeroComponent } from './shared/hero/component/hero.component';
import { MedImagePipe } from './shared/pipe/med-image.pipe';
import { PriceFormatPipe } from './shared/pipe/price-format.pipe';
import { NotFoundComponent } from './shared/not-found/component/not-found.component';
import { LoginComponent } from './login/component/login.component';
import { InputComponent } from './shared/input/component/input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductListComponent,
    CartListComponent,
    CardComponent,
    AlphabeticalOrderPipe,
    MedImagePipe,
    PriceFormatPipe,
    HeroComponent,
    NotFoundComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
