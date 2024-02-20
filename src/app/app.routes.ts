import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { CreateCateComponent } from './pages/admin/create/create.component';
import { EditCateComponent } from './pages/admin/edit/edit.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { RegisterComponent } from '../app/pages/register/register.component';
import { CategoriesComponent } from './pages/admin/categorys/categorys.component';
import { createComponent } from './pages/admin/create/create.component.spec';
import { EditCateComponent } from './pages/admin/edit/edit.component';
import { UserlistComponent } from './pages/admin/users/list/list.component';
import { CreateUserComponent } from './pages/admin/users/create/create.component';
import { EditComponent } from './pages/admin/users/edit/edit.component';
import { AdminGuard } from './guards/guards.guard';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      {
        path: 'create', component: createComponent
      },
      {
        path:'update/:id', component:EditComponent
      },
      {
        path:'categories', component:CategoriesComponent
      },
      {
        path:'createcate', component:CreateCateComponent
      },
      {
        path:'editcate/:id', component:EditCateComponent
      },
      {
        path:'users', component:UserlistComponent
      },
      {
        path:'createuser', component:CreateUserComponent
      },
      {
        path:'edituser/:id', component:EditCateComponent
      }
    ],

  },
  { path: 'pages/products', component: ProductsComponent },

];
export class AppRoutingModule { }
