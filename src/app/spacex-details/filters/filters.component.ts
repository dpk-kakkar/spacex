import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Filters } from "../spacex.service";

@Component({
  selector: "spacex-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.less"],
})
export class FiltersComponent implements OnInit {
  @Input() filters: Filters = null;
  @Output() filtersUpdated: EventEmitter<any> = new EventEmitter();
  public selectedYear: number = null;
  public launchSuccess: boolean = null;
  public landingSuccess: boolean = null;
  public years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  constructor() {}

  ngOnInit() {
    if (this.filters) {
      this.selectedYear = this.filters.year;
      this.launchSuccess = this.filters.launchSuccess;
      this.landingSuccess = this.filters.landingSuccess;
    }
  }

  public yearSelected(year) {
    if (year === this.selectedYear) {
      year = null;
    }
    this.selectedYear = year;
    this.updateFilters();
  }

  public launchSelected(launchValue) {
    if (launchValue === this.launchSuccess) {
      launchValue = null;
    }
    this.launchSuccess = launchValue;

    this.updateFilters();
  }
  public landingSelected(launchValue) {
    if (launchValue === this.landingSuccess) {
      launchValue = null;
    }
    this.landingSuccess = launchValue;
    this.updateFilters();
  }

  public updateFilters() {
    let filters = new Filters(
      this.selectedYear,
      this.launchSuccess,
      this.landingSuccess
    );

    this.filtersUpdated.next(filters);
  }
}
