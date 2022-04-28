import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistasPagosComponent } from './vistas-pagos.component';

describe('VistasPagosComponent', () => {
  let component: VistasPagosComponent;
  let fixture: ComponentFixture<VistasPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistasPagosComponent ]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistasPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
