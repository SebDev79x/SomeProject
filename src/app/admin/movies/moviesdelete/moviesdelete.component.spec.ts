import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesdeleteComponent } from './moviesdelete.component';

describe('MoviesdeleteComponent', () => {
  let component: MoviesdeleteComponent;
  let fixture: ComponentFixture<MoviesdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
