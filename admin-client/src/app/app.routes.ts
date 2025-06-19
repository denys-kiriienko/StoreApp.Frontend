import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ProductListPage } from './pages/product-list-page/product-list-page';
import { ProductFormPage } from './pages/product-form-page/product-form-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'products', component: ProductListPage },
    { path: 'products/new', component: ProductFormPage },
    { path: 'products/edit/:id', component: ProductFormPage }
];
