import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkspaceSettingsComponent } from './profile-workspace-settings.component';

describe('ProfileWorkspaceSettingsComponent', () => {
  let component: ProfileWorkspaceSettingsComponent;
  let fixture: ComponentFixture<ProfileWorkspaceSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWorkspaceSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWorkspaceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
