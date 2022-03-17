import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCardsComponent } from './movies-cards.component';

describe('MoviesCardsComponent', () => {
  let component: MoviesCardsComponent;
  let fixture: ComponentFixture<MoviesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
