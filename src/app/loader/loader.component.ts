import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'spacex-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input()
  public showBackground = true;

  @Input()
  public isRelative = false;

  @Input()
  public isSmall = false;
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }


}
