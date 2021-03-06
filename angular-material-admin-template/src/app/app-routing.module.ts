import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './layout/default/default.component';
import { DefaultModule } from './layout/default/default.module';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent, 
        children: [{
            path: '',
            component: HomeComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
