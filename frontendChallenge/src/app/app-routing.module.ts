import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListClientPage } from './pages/list-client/list-client.component';
import { FormClientPage } from './pages/form-client/form-client.component';
import { NgModule } from '@angular/core';
import { FormProductPage } from './pages/form-product/form-product.component';
import { FormSalePage } from './pages/form-sale/form-sale.component';
import { FormIndustryPage } from './pages/form-industry/form-industry.component';
import { ListIndustryPage } from './pages/list-industry/list-industry.component';
import { ListProductPage } from './pages/list-product/list-product.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clients', component: ListClientPage},
  { path: 'client', component: FormClientPage},
  { path: 'rubro', component: FormIndustryPage},
  { path: 'rubros', component: ListIndustryPage},
  { path: 'product', component: FormProductPage},
  { path: 'products', component: ListProductPage},
  { path: 'sale', component: FormSalePage},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }