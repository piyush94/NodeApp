import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthService],
    component: HomeComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent,
        data: {
          title: 'information'
        }
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService],
  declarations: [AboutComponent, ContactComponent, InfoComponent, HomeComponent]
})
export class HomeModule { }
