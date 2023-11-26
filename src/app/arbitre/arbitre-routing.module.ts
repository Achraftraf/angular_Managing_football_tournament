import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ArbitreDashboardComponent } from './arbitre-dashboard/arbitre-dashboard.component';

const routes: Routes = [
  {path:"arbitre", redirectTo: "arbitre/list", pathMatch: "full"},
  {path: "arbitre/list",component: ListComponent},
  {path: "arbitre/form",component: FormComponent},
  {path: "arbitre/dash",component: ArbitreDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArbitreRoutingModule { }
