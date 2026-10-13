import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltroGeneros } from './filtro-generos';

describe('FiltroGeneros', () => {
  let component: FiltroGeneros;
  let fixture: ComponentFixture<FiltroGeneros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroGeneros],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroGeneros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
