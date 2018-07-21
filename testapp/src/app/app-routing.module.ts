import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'view',
                component: ViewComponent,
            },
            {
                path: 'edit',
                component: EditComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ViewComponent, EditComponent]
