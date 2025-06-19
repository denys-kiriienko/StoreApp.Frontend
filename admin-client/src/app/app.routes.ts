import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ProductListPage } from './pages/product-list-page/product-list-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'products', component: ProductListPage },
];
