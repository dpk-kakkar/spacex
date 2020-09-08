import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { SPACEXMission } from "../spacex.service";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "spacex-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.less"],
})
export class ProgramsComponent implements OnInit, AfterViewInit {
  @Input() missions: SPACEXMission[] = [];
  public maxHeight: number = 200;
  constructor() {}

  ngOnInit() {
    console.error(this.missions);
  }

  ngAfterViewInit() {
    this.calculateHeight();
  }
  public calculateHeight() {
    setTimeout(() => {
      for (var i = 0; i < this.missions.length; i++) {
        const elem = document.getElementById("mission" + i);
        const height = elem ? elem.clientHeight : 200;
        //console.error(height);
        
        if (height > this.maxHeight) {
          this.maxHeight = height;
        }
      }
      document.querySelectorAll('.program-container').forEach((e)=>{
        e.setAttribute('style', `height:${this.maxHeight-30}px`);
      });
    }, 200);
  }
}
