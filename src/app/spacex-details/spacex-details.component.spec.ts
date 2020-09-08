import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexDetailsComponent } from './spacex-details.component';

describe('SpacexDetailsComponent', () => {
  let component: SpacexDetailsComponent;
  let fixture: ComponentFixture<SpacexDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
