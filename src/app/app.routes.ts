import { Routes } from '@angular/router';
import { DefaultComponent } from './components/layouts/default/default.component';
import { HomeComponent } from './components/modules/home/home.component';

export const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
        path: '',
        component: HomeComponent
    }]
}];
