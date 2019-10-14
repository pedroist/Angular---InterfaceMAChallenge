import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/*pages*/
import { Option1Component } from './../pages/option1/option1.component';
import { Option2Component } from './../pages/option2/option2.component';
import { Option3Component } from './../pages/option3/option3.component';
import { ShowCaseComponent } from './../pages/show-case/show-case.component';
import { DynamicComponent } from './../pages/dynamic/dynamic.component';

const routes: Routes = [
  { path: '', component: Option1Component },
  { path: 'option2', component: Option2Component },
  { path: 'option3', component: Option3Component },
  { path: 'show-case', component: ShowCaseComponent },
  { path: 'dynamic', component: DynamicComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
