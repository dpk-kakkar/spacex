import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { getQueryPredicate } from "@angular/compiler/src/render3/view/util";

@Injectable({
  providedIn: "root",
})
export class SpacesxProgramsService {
  constructor(public http: HttpClient) {}

  public async fetchData(filters: Filters): Promise<SPACEXMission[]> {
    let url = "https://api.spacexdata.com/v3/launches?limit=100";
    let queryParams = "";
    if (filters) {
      if (filters.launchSuccess === true || filters.launchSuccess === false) {
        queryParams += `&launch_success=${filters.launchSuccess}`;
      }
      if (filters.year) {
        queryParams += `&launch_year=${filters.year}`;
      }
      if (filters.landingSuccess === true || filters.landingSuccess === false) {
        queryParams += `&landing_success=${filters.landingSuccess}`;
      }
    }
    url += queryParams;
    let missions = await this.http.get(url).toPromise();
    return this.parseMissionDetails(missions);
  }

  public parseMissionDetails(missions) {
    let parsedMissions: SPACEXMission[] = [];
    if (missions && missions.length > 0) {
      for (let mission of missions) {
        let parsedMission: SPACEXMission = new SPACEXMission();
        parsedMission.launchSuccess = mission.launch_success;
        parsedMission.launchYear = mission.launch_year;
        parsedMission.launchImage = mission.links
          ? mission.links.mission_patch
          : null;
        parsedMission.missionId = mission.mission_id;
        parsedMission.missionName = mission.mission_name;
        // not avaiable in api
        parsedMission.successfullLanding = false;
        parsedMissions.push(parsedMission);
      }
    }
    return parsedMissions;
  }
}

export class SPACEXMission {
  public missionId: [];
  public missionName: string;
  public launchYear: string;
  public launchSuccess: boolean;
  public launchImage: string;
  public successfullLanding: boolean;
}
export class Filters {
  year: number = null;
  launchSuccess: boolean = null;
  landingSuccess: boolean = null;
  constructor(year?, launchSuccess?, landingSuccess?) {
    this.year = year;
    this.launchSuccess = launchSuccess;
    this.landingSuccess = landingSuccess;
  }
}
