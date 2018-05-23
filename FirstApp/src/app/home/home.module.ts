import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth.service';
import { PermService } from '../perm.service';

const routes: Routes = [
  {
    path: 'home',
    data: {
      title: 'Home',
      permMap: ['hello', 'world']
    },
    canActivate: [AuthService],
    component: HomeComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
        data: {
          title: 'Information',
          permMap: ['hello', 'world']
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          permMap: ['hello', 'world']
        }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          permMap: ['hello', 'world']
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService, PermService],
  declarations: [AboutComponent, ContactComponent, InfoComponent, HomeComponent]
})
export class HomeModule { }
