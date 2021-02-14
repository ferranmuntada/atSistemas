import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsViewComponent } from './dogs-view/dogs-view.component';

const routes: Routes = [
  { path: '', component: DogsViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
