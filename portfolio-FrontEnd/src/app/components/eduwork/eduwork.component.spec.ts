import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduworkComponent } from './eduwork.component';

describe('EduworkComponent', () => {
  let component: EduworkComponent;
  let fixture: ComponentFixture<EduworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
