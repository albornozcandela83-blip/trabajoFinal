import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productocard } from './productocard';

describe('Productocard', () => {
  let component: Productocard;
  let fixture: ComponentFixture<Productocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productocard],
    }).compileComponents();

    fixture = TestBed.createComponent(Productocard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
