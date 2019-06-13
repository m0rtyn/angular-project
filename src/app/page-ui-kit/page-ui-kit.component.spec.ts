import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUiKitComponent } from './page-ui-kit.component';

describe('PageUiKitComponent', () => {
  let component: PageUiKitComponent;
  let fixture: ComponentFixture<PageUiKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUiKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUiKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
