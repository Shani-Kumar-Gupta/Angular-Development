import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionObservablesComponent } from './function-observables.component';

describe('FunctionObservablesComponent', () => {
  let component: FunctionObservablesComponent;
  let fixture: ComponentFixture<FunctionObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
