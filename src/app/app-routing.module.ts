import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/includes/header/header.component';
import { PromiseComponent } from 'src/promise/promise.component';

const routes: Routes = [
  {path:'promise' , component:PromiseComponent},
  {path:'**' , component:PromiseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
