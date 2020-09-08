import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacexDetailsRoutingModule } from './spacex-details-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { ProgramsComponent } from './programs/programs.component';
import { SpacexDetailsComponent } from './spacex-details.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [FiltersComponent, ProgramsComponent, SpacexDetailsComponent],
  imports: [
    CommonModule,
    SpacexDetailsRoutingModule,
    LoaderModule.loadLoader()
  ]
})
export class SpacexDetailsModule { }
