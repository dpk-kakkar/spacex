import { Component, OnInit } from "@angular/core";
import {
  SpacesxProgramsService,
  SPACEXMission,
  Filters,
} from "./spacex.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "spacex-spacex-details",
  templateUrl: "./spacex-details.component.html",
  styleUrls: ["./spacex-details.component.less"],
})
export class SpacexDetailsComponent implements OnInit {
  public appliedFilters: Filters = null;
  public isDataLoaded: boolean = false;
  public areFiltersLoaded:boolean=false;
  public filteredData: SPACEXMission[] = null;
  constructor(
    private spaceXService: SpacesxProgramsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.buildFilters(this.activatedRoute.snapshot.queryParams);
  }

  private buildFilters(queryParams) {
    this.appliedFilters = new Filters();
    this.appliedFilters.year = queryParams.launch_year?parseInt(queryParams.launch_year):queryParams.launch_year;
    this.appliedFilters.launchSuccess =queryParams.launch_succes? !!!queryParams.launch_succes:null;
    this.appliedFilters.landingSuccess =queryParams.landing_success? !!!queryParams.landing_success:null;
    console.error(this.appliedFilters);
    
    this.areFiltersLoaded=true;
    this.fetchData();
  }
  private filtersUpdated(filters) {
    if (filters) {
      this.appliedFilters = filters;
      this.fetchData();
      this.updateUrlParams();
    }
  }
  private fetchData() {
    this.isDataLoaded = false;
    this.spaceXService.fetchData(this.appliedFilters).then((response) => {
      this.isDataLoaded = true;
      console.error(response);
      this.filteredData = response;
    });
  }

  private updateUrlParams() {
    const url = this.router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: this.getQueryParams(this.appliedFilters),
      })
      .toString();

    this.location.go(url);
  }

  private getQueryParams(filters) {
    let queryParams = {};
    if (filters.launchSuccess === true || filters.launchSuccess === false) {
      queryParams["launch_success"] = filters.launchSuccess;
    }
    if (filters.year) {
      queryParams["launch_year"] = filters.year;
    }
    if (filters.landingSuccess === true || filters.landingSuccess === false) {
      queryParams["landing_success"] = filters.landingSuccess;
    }
    return queryParams;
  }
}
