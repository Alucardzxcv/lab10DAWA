import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaVentanaComponent } from './nueva-ventana/nueva-ventana.component';

const routes: Routes = [{ path: 'nueva-ventana', component: NuevaVentanaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
