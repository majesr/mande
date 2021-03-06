import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PagosComponent } from './pagos/pagos.component';
import { PruebaComponent } from './prueba/prueba.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'ordenes/:id', component: OrdenesComponent },
      { path: 'servicios', component: ServiciosComponent},
      { path: 'servicios/:id', component: ServiciosComponent},
      { path: 'pedidos', component: PedidosComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'prueba', component: PruebaComponent },

      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
