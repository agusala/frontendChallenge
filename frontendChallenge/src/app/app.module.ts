import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SessionService } from './auth/session.service';
import { AuthInterceptorService } from './auth/authInterceptor.service';
import { ListClientModule } from './pages/list-client/list-client.module';
import { FormIndustryModule } from './pages/form-industry/form-industry.module';
import { ListIndustryModule } from './pages/list-industry/list-industry.module';
import { FormProductModule } from './pages/form-product/form-product.module';
import { ListProductModule } from './pages/list-product/list-product.module';
import { FormSaleModule } from './pages/form-sale/form-sale.module';
import { FormClientModule } from './pages/form-client/form-client.module';
import { NavBarComponent } from './features/nav-bar/components/nav-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ListClientModule,
    FormIndustryModule,
    ListIndustryModule,
    FormProductModule,
    ListProductModule,
    FormSaleModule,
    FormClientModule
  ],
  providers: [
    SessionService,{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }