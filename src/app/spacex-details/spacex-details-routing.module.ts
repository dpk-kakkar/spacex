import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpacexDetailsComponent } from "./spacex-details.component";

const routes: Routes = [
  {
    path: "",
    component: SpacexDetailsComponent,
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacexDetailsRoutingModule {}
