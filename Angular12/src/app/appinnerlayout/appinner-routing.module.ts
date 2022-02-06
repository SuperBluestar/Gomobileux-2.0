import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppinnerlayoutComponent } from './appinnerlayout.component';
import { ProductComponent } from './shop/product/product.component';
import { MyordersComponent } from './shop/myorders/myorders.component';
import { OrderdetailComponent } from './shop/orderdetail/orderdetail.component';
import { ShopThankyouComponent } from './shop/thankyou/thankyou.component';
import { AddaddressesComponent } from './shop/addaddresses/addaddresses.component';
import { PagesComponent } from './pages/pages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FaqsComponent } from './faqs/faqs.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandcoditionComponent } from './termsandcodition/termsandcodition.component';
import { InvoiceComponent } from './shop/invoice/invoice.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { AddmoenyComponent } from './addmoeny/addmoeny.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddressesComponent } from './shop/addresses/addresses.component';

const routes: Routes = [
  {
    path: '',
    component: AppinnerlayoutComponent,

    children: [

      // inner pages 
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'addmoney',
        component: AddmoenyComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'myorders',
        component: MyordersComponent,
      },
      {
        path: 'orderdetail',
        component: OrderdetailComponent,
      },      
      {
        path: 'shopthankyou',
        component: ShopThankyouComponent,
      },
      {
        path: 'addaddresses',
        component: AddaddressesComponent,
      },
      {
        path: 'addresses',
        component: AddressesComponent,
      },      
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
    
      // Other pages      
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'chat',
        component: ChatlistComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'pages',
        component: PagesComponent,
      },
      {
        path: 'pagenotfound',
        component: PagenotfoundComponent,
      },
      {
        path: 'faqs',
        component: FaqsComponent,
      },
      {
        path: 'userlist',
        component: UserlistComponent,
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      {
        path: 'termsandconditions',
        component: TermsandcoditionComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'blogdetails',
        component: BlogdetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),    
  ],
  exports: [RouterModule]
})
export class AppinnerlayoutRoutingModule { }
