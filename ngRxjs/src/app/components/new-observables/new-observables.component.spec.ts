import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObservablesComponent } from './new-observables.component';

describe('NewObservablesComponent', () => {
  let component: NewObservablesComponent;
  let fixture: ComponentFixture<NewObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
