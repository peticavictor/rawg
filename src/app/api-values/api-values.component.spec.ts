import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiValuesComponent } from './api-values.component';

describe('ApiValuesComponent', () => {
  let component: ApiValuesComponent;
  let fixture: ComponentFixture<ApiValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
