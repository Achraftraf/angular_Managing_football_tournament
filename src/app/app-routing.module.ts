import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitreRoutingModule } from './arbitre/arbitre-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ArbitreRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
