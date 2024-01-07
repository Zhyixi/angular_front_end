import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTutorialComponent } from './my-tutorial/my-tutorial.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: 'test', component: MyTutorialComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
