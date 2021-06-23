import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { AnteraSwimlaneComponent } from './pages/antera-swimlane/antera-swimlane.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'swimlane', component: AnteraSwimlaneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
