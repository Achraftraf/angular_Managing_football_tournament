import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"arbitre", redirectTo: "arbitre/list", pathMatch: "full"},
  {path: "arbitre/list",component: ListComponent},
  {path: "arbitre/form",component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArbitreRoutingModule { }
