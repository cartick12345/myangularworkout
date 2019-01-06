
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { Exer1Component } from './exer1/exer1.component';
import { from } from 'rxjs';
import { ProductsServices } from './products.services';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { MydirectiveComponent } from './mydirective/mydirective.component';
import { InputformatDirective } from './CustomDirectives/inputformat.directive';
import { PhoneformatDirective } from './CustomDirectives/phoneformat.directive';
import { GoifDirective } from './CustomDirectives/goif.directive';
import { GoforDirective } from './CustomDirectives/gofor.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { ReversePipe } from './CustomPipes/reverse.pipe';
import { SummaryPipe } from './CustomPipes/summary.pipe';
import { OrdinalPipe } from './CustomPipes/ordinal.pipe';
import { AgePipe } from './CustomPipes/age.pipe';
import { ParenttocartComponent } from './parenttocart/parenttocart.component';
import { FilterPipe } from './CustomPipes/filter.pipe';
import { MyformComponent } from './myform/myform.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CartitemsComponent,
    Exer1Component,
    HighlightDirective,
    MydirectiveComponent,
    InputformatDirective,
    PhoneformatDirective,
    GoifDirective,
    GoforDirective,
    ParentComponent,
    ChildComponent,
    MypipesComponent,
    ReversePipe,
    SummaryPipe,
    OrdinalPipe,
    AgePipe,
    ParenttocartComponent,
    FilterPipe,
    MyformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
     ],
  providers: [ProductsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
