import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCourentComponent } from './compte-courent.component';

describe('CompteCourentComponent', () => {
  let component: CompteCourentComponent;
  let fixture: ComponentFixture<CompteCourentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteCourentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteCourentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
