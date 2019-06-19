import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiKitViewerComponent } from './ui-kit-viewer.component';

describe('UiKitViewerComponent', () => {
  let component: UiKitViewerComponent;
  let fixture: ComponentFixture<UiKitViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiKitViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiKitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
