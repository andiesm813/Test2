import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllProductsComponent } from './all-products/all-products.component';
import { IgxListModule, IgxButtonModule, IgxToggleModule, IgxIconModule, IgxDropDownModule, IgxCardModule, IgxButtonGroupModule, IgxSelectModule, IgxBadgeModule, IgxAvatarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    HomeComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxIconModule,
    IgxDropDownModule,
    IgxCardModule,
    IgxButtonGroupModule,
    FormsModule,
    IgxSelectModule,
    IgxBadgeModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
