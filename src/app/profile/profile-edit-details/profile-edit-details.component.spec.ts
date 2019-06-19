import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditDetailsComponent } from './profile-edit-details.component';

describe('ProfileEditDetailsComponent', () => {
  let component: ProfileEditDetailsComponent;
  let fixture: ComponentFixture<ProfileEditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
