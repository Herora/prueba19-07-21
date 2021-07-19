import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponetsModule } from 'src/app/components/componets.module';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { DashboardComponent } from './dashboard.component';

import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { EditarComponent } from './pages/editar/editar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormProductoComponent } from './util/form-producto/form-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    RouterModule,
    ComponetsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    RegistrarComponent,
    ListarComponent,
    DashboardComponent,
    EditarComponent,
    FormProductoComponent,
  ],
  exports:[
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DashboardPageModule {}
