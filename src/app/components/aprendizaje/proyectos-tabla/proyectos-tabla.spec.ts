import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectosTabla } from './proyectos-tabla';

describe('ProyectosTabla', () => {
  let component: ProyectosTabla;
  let fixture: ComponentFixture<ProyectosTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosTabla],
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosTabla);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
