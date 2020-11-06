import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalExpenseComponent } from './personal-expense/personal-expense.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'personal-expense', component: PersonalExpenseComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // declarations: [AppComponent, HomeComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
