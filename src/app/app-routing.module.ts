import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { NewClientComponent } from './new-client/new-client.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
  },
  {
    path: 'client/user/:id',
    component: ClientPageComponent,
  },
  {
    path: 'client/create',
    component: NewClientComponent,
  },
  {
    path: 'client/delete/:id',
    component: ClientDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
