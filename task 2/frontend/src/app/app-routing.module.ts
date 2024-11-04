import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerComponent } from './scheduler/scheduler.component';

const routes: Routes = [
  { path: '', redirectTo: '/scheduler', pathMatch: 'full' }, // Redirect to the scheduler page
  { path: 'scheduler', component: SchedulerComponent }, // Route to SchedulerComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
