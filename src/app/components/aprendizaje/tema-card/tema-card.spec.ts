import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemaCard } from './tema-card';

describe('TemaCard', () => {
  let component: TemaCard;
  let fixture: ComponentFixture<TemaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaCard],
    }).compileComponents();

    fixture = TestBed.createComponent(TemaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
