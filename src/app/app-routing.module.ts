import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasPagosComponent } from './components/vistas-pagos/vistas-pagos.component';

const routes: Routes = [
  {path : 'pagoContribucion',component : VistasPagosComponent},
  {path: '',redirectTo:'/',pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
