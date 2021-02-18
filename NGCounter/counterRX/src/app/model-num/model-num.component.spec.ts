import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelNumComponent } from './model-num.component';

describe('ModelNumComponent', () => {
  let component: ModelNumComponent;
  let fixture: ComponentFixture<ModelNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
