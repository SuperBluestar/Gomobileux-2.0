import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule} from 'ng-circle-progress';
import { NouisliderModule } from 'ng2-nouislider';import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { Daterangepicker } from 'ng2-daterangepicker';

import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { ApphomelayoutComponent } from './apphomelayout/apphomelayout.component';
import { AppinnerlayoutComponent } from './appinnerlayout/appinnerlayout.component';
import { LandingComponent } from './authlayout/landing/landing.component';
import { SigninComponent } from './authlayout/signin/signin.component';
import { SignupComponent } from './authlayout/signup/signup.component';
import { ForgetpasswordComponent } from './authlayout/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './authlayout/resetpassword/resetpassword.component';
import { VerifyComponent } from './authlayout/verify/verify.component';
import { ThankyouComponent } from './authlayout/thankyou/thankyou.component';
import { ShopThankyouComponent } from './appinnerlayout/shop/thankyou/thankyou.component';
import { StaticfooterComponent } from './apphomelayout/partials/staticfooter/staticfooter.component';
import { HeadermenuComponent } from './apphomelayout/partials/headermenu/headermenu.component';
import { SidebarComponent } from './apphomelayout/partials/sidebar/sidebar.component';
import { StatsComponent } from './apphomelayout/stats/stats.component';
import { PaymentComponent } from './apphomelayout/payment/payment.component';
import { AddressComponent } from './apphomelayout/address/address.component';
import { BarchartComponent } from './apphomelayout/stats/barchart/barchart.component';
import { StyleComponent } from './apphomelayout/style/style.component';
import { ProductComponent } from './appinnerlayout/shop/product/product.component';
import { MyordersComponent } from './appinnerlayout/shop/myorders/myorders.component';
import { OrderdetailComponent } from './appinnerlayout/shop/orderdetail/orderdetail.component';
import { AddaddressesComponent } from './appinnerlayout/shop/addaddresses/addaddresses.component';
import { ChatlistComponent } from './appinnerlayout/chatlist/chatlist.component';
import { MessagesComponent } from './appinnerlayout/messages/messages.component';
import { NotificationsComponent } from './appinnerlayout/notifications/notifications.component';
import { PagesComponent } from './appinnerlayout/pages/pages.component';
import { FaqsComponent } from './appinnerlayout/faqs/faqs.component';
import { UserlistComponent } from './appinnerlayout/userlist/userlist.component';
import { ContactusComponent } from './appinnerlayout/contactus/contactus.component';
import { TermsandcoditionComponent } from './appinnerlayout/termsandcodition/termsandcodition.component';
import { PagenotfoundComponent } from './appinnerlayout/pagenotfound/pagenotfound.component';
import { InvoiceComponent } from './appinnerlayout/shop/invoice/invoice.component';
import { BlogComponent } from './appinnerlayout/blog/blog.component';
import { BlogdetailsComponent } from './appinnerlayout/blogdetails/blogdetails.component';
import { ThankyouoneComponent } from './authlayout/thankyouone/thankyouone.component';
import { ShophomeComponent } from './apphomelayout/shophome/shophome.component';
import { SettingsComponent } from './apphomelayout/settings/settings.component';
import { CartComponent } from './apphomelayout/cart/cart.component';
import { ProfileComponent } from './appinnerlayout/profile/profile.component';
import { AddmoenyComponent } from './appinnerlayout/addmoeny/addmoeny.component';
import { AboutusComponent } from './appinnerlayout/aboutus/aboutus.component';
import { AddressesComponent } from './appinnerlayout/shop/addresses/addresses.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    AuthlayoutComponent,
    ApphomelayoutComponent,
    AppinnerlayoutComponent,
    LandingComponent,
    SigninComponent,
    SignupComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    VerifyComponent,
    ThankyouComponent,
    StaticfooterComponent,
    HeadermenuComponent,
    SidebarComponent,
    StatsComponent,
    BarchartComponent,
    StyleComponent,
    ProductComponent,
    PaymentComponent,
    MyordersComponent,
    OrderdetailComponent,
    ShopThankyouComponent,
    AddaddressesComponent,
    ChatlistComponent,
    MessagesComponent,
    NotificationsComponent,
    PagesComponent,
    FaqsComponent,
    UserlistComponent,
    ContactusComponent,
    TermsandcoditionComponent,
    PagenotfoundComponent,
    InvoiceComponent,
    BlogComponent,
    BlogdetailsComponent,
    ThankyouoneComponent,
    ShophomeComponent,
    SettingsComponent,
    CartComponent,
    AddressComponent,
    ProfileComponent,
    AddmoenyComponent,
    AboutusComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ChartsModule,
    NgCircleProgressModule.forRoot(),
    NouisliderModule,
    FullCalendarModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
