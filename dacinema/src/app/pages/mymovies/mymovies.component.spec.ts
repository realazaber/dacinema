import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymoviesComponent } from './mymovies.component';

describe('MymoviesComponent', () => {
  let component: MymoviesComponent;
  let fixture: ComponentFixture<MymoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
