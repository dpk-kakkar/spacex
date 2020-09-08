import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpacexDetailsComponent } from "./spacex-details/spacex-details.component";

const routes: Routes = [
  {
    path: "spacex",
    loadChildren: "./spacex-details/spacex-details.module#SpacexDetailsModule",
  },
  {
    path: "",
    redirectTo: "spacex",
    pathMatch: "full",
  },
  /* {
    path:"/spacex",
    component:SpacexDetailsComponent,
    pathMatch:"full"
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
