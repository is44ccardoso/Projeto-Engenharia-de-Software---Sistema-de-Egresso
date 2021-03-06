import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
  { path: 'grafico', loadChildren: './grafico/grafico.module#GraficoModule'},
  { path: 'survey', loadChildren: './survey/survey.module#SurveyModule'},
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
  { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
