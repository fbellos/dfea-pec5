import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  { path: '', component: ListItemComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: '**', component: ListItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
