import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesindexComponent } from './moviesindex.component';

describe('MoviesindexComponent', () => {
  let component: MoviesindexComponent;
  let fixture: ComponentFixture<MoviesindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
